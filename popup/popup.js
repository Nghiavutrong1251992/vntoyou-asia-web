/**
 * Popup Manager for VN To You Asia
 * Handles welcome popup display and user interactions
 */

class PopupManager {
    constructor() {
        this.popupId = 'welcome-popup';
        this.storageKey = 'vntoyou_popup_dismissed';
        this.showDelay = 5000; // 5 seconds
        this.popup = null;
        this.timeoutId = null;
        
        this.init();
    }
    
    init() {
        // Check if user has dismissed popup before
        if (this.shouldShowPopup()) {
            this.createPopup();
            this.schedulePopup();
        }
    }
    
    shouldShowPopup() {
        // Check localStorage to see if user dismissed popup
        const dismissed = localStorage.getItem(this.storageKey);
        const dismissedDate = dismissed ? new Date(dismissed) : null;
        const now = new Date();
        
        // Show popup again after 7 days
        if (dismissedDate) {
            const daysSinceDismissed = (now - dismissedDate) / (1000 * 60 * 60 * 24);
            return daysSinceDismissed > 7;
        }
        
        return true;
    }
    
    createPopup() {
        const popupHTML = `
            <div id="${this.popupId}" class="popup-overlay">
                <div class="popup-container">
                    <div class="popup-header">
                        <button class="popup-close" onclick="popupManager.closePopup()">&times;</button>
                        <h2 class="popup-title">Welcome to VN To You Asia!</h2>
                        <p class="popup-subtitle">Your Trusted Vietnam Travel Partner</p>
                    </div>
                    
                    <div class="popup-body">
                        <div class="popup-icon">
                            <div class="popup-icon-emoji">🇻🇳</div>
                        </div>
                        
                        <div class="popup-message">
                            <h3>Discover Amazing Vietnam Tours</h3>
                            <p>We provide high-quality, customized tour packages for businesses and travelers. From Northern mountains to Southern beaches, explore Vietnam with our expert guides!</p>
                        </div>
                        
                        <div class="popup-contacts">
                            <a href="mailto:SALES@VNTOYOU.NET" class="popup-contact-btn">
                                📧 Email Us
                            </a>
                            <a href="https://wa.me/84904596505" class="popup-contact-btn" target="_blank">
                                💬 WhatsApp
                            </a>
                            <a href="tel:+84904596505" class="popup-contact-btn">
                                📱 Call Now
                            </a>
                        </div>
                        
                        <div class="popup-offer">
                            <h4>🎁 Special Offer for New Customers</h4>
                            <p>Contact us today and get a <strong>free consultation</strong> for your Vietnam travel plans!</p>
                        </div>
                    </div>
                    
                    <div class="popup-footer">
                        <label class="dont-show-again">
                            <input type="checkbox" id="dont-show-checkbox"> 
                            Don't show this again for a week
                        </label>
                    </div>
                </div>
            </div>
        `;
        
        // Add popup to document
        document.body.insertAdjacentHTML('beforeend', popupHTML);
        this.popup = document.getElementById(this.popupId);
        
        // Add event listeners
        this.addEventListeners();
    }
    
    addEventListeners() {
        // Close popup when clicking overlay
        this.popup.addEventListener('click', (e) => {
            if (e.target === this.popup) {
                this.closePopup();
            }
        });
        
        // Close popup with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.popup && this.popup.classList.contains('show')) {
                this.closePopup();
            }
        });
        
        // Prevent popup container clicks from closing popup
        const container = this.popup.querySelector('.popup-container');
        container.addEventListener('click', (e) => {
            e.stopPropagation();
        });
        
        // Track contact button clicks
        const contactBtns = this.popup.querySelectorAll('.popup-contact-btn');
        contactBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.trackEvent('contact_click', btn.textContent.trim());
                // Auto-close popup after contact click
                setTimeout(() => this.closePopup(), 1000);
            });
        });
    }
    
    schedulePopup() {
        this.timeoutId = setTimeout(() => {
            this.showPopup();
        }, this.showDelay);
    }
    
    showPopup() {
        if (this.popup) {
            this.popup.classList.add('show');
            const container = this.popup.querySelector('.popup-container');
            container.classList.add('animate');
            
            // Disable body scroll
            document.body.style.overflow = 'hidden';
            
            this.trackEvent('popup_shown');
        }
    }
    
    closePopup() {
        if (this.popup) {
            const checkbox = document.getElementById('dont-show-checkbox');
            
            // Check if user doesn't want to see popup again
            if (checkbox && checkbox.checked) {
                localStorage.setItem(this.storageKey, new Date().toISOString());
                this.trackEvent('popup_dismissed_permanently');
            } else {
                this.trackEvent('popup_closed');
            }
            
            this.popup.classList.remove('show');
            
            // Re-enable body scroll
            document.body.style.overflow = '';
            
            // Remove popup after animation
            setTimeout(() => {
                if (this.popup && this.popup.parentNode) {
                    this.popup.parentNode.removeChild(this.popup);
                }
            }, 300);
        }
        
        // Clear timeout if popup is closed before showing
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }
    
    trackEvent(eventName, eventData = null) {
        // Simple event tracking - can be integrated with analytics
        console.log('Popup Event:', eventName, eventData);
        
        // Example: Send to Google Analytics
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                'event_category': 'popup',
                'event_label': eventData,
                'value': 1
            });
        }
    }
    
    // Public method to manually show popup
    showManually() {
        if (this.popup) {
            this.showPopup();
        } else {
            this.createPopup();
            this.showPopup();
        }
    }
    
    // Public method to destroy popup
    destroy() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
        
        if (this.popup && this.popup.parentNode) {
            this.popup.parentNode.removeChild(this.popup);
        }
        
        document.body.style.overflow = '';
    }
}

// Initialize popup manager when DOM is loaded
let popupManager;

document.addEventListener('DOMContentLoaded', function() {
    // Only initialize on main pages, not on detail pages
    const isDetailPage = window.location.pathname.includes('/details/');
    
    if (!isDetailPage) {
        popupManager = new PopupManager();
    }
});

// Expose global functions for HTML onclick handlers
window.showWelcomePopup = function() {
    if (popupManager) {
        popupManager.showManually();
    }
};

window.closeWelcomePopup = function() {
    if (popupManager) {
        popupManager.closePopup();
    }
};