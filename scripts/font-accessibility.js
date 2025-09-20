/**
 * Font Size Accessibility Controls
 * Allows users to dynamically adjust font sizes across the website
 * 
 * Usage: Include this script on all pages that need font scaling
 */

class FontAccessibilityController {
    constructor() {
        this.currentScale = 1;
        this.minScale = 0.8;
        this.maxScale = 1.5;
        this.scaleStep = 0.1;
        
        this.init();
    }

    init() {
        // Load saved preference
        this.loadFontScale();
        
        // Create controls
        this.createControls();
        
        // Apply initial scale
        this.applyFontScale();
        
        // Update mobile typography
        this.updateMobileTypography();
    }

    createControls() {
        // Create control panel HTML - vertical layout
        const controlsHTML = `
            <div class="font-size-controls" id="fontSizeControls">
                <button class="font-control-btn" id="increaseFont" title="Tăng kích thước chữ">+</button>
                <span class="font-size-indicator" id="fontSizeIndicator">${Math.round(this.currentScale * 100)}%</span>
                <button class="font-control-btn" id="decreaseFont" title="Giảm kích thước chữ">-</button>
                <span class="font-control-label">Aa</span>
            </div>
        `;

        // Add to page
        document.body.insertAdjacentHTML('beforeend', controlsHTML);

        // Add event listeners
        document.getElementById('decreaseFont').addEventListener('click', () => this.decreaseFont());
        document.getElementById('increaseFont').addEventListener('click', () => this.increaseFont());
    }

    decreaseFont() {
        if (this.currentScale > this.minScale) {
            this.currentScale = Math.max(this.minScale, this.currentScale - this.scaleStep);
            this.applyFontScale();
            this.updateIndicator();
            this.saveFontScale();
        }
    }

    increaseFont() {
        if (this.currentScale < this.maxScale) {
            this.currentScale = Math.min(this.maxScale, this.currentScale + this.scaleStep);
            this.applyFontScale();
            this.updateIndicator();
            this.saveFontScale();
        }
    }

    applyFontScale() {
        // Update CSS custom property
        document.documentElement.style.setProperty('--font-scale-multiplier', this.currentScale);
        
        // Apply to common elements that might not use CSS variables
        this.applyToCommonElements();
        
        // Update mobile typography if needed
        this.updateMobileTypography();
    }

    applyToCommonElements() {
        const baseSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--font-size-base'));
        const scaledSize = baseSize * this.currentScale;
        
        // Apply to elements that might not inherit the variable
        const selectors = [
            'p', 'div', 'span', 'li', 'td', 'th',
            '.card-text', '.list-group-item', '.form-control',
            '.btn', '.nav-link', '.dropdown-item'
        ];
        
        selectors.forEach(selector => {
            const elements = document.querySelectorAll(selector);
            elements.forEach(element => {
                // Only apply if element doesn't have specific font-size already
                const computedStyle = window.getComputedStyle(element);
                const fontSize = computedStyle.fontSize;
                
                if (!element.hasAttribute('data-original-font-size')) {
                    element.setAttribute('data-original-font-size', fontSize);
                }
                
                const originalSize = parseFloat(element.getAttribute('data-original-font-size'));
                const newSize = originalSize * this.currentScale;
                element.style.fontSize = newSize + 'px';
            });
        });
    }

    updateMobileTypography() {
        // For mobile, we also need to scale the mobile-specific variables
        if (window.innerWidth <= 768) {
            const mobileBaseSize = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--font-size-mobile-base'));
            const scaledMobileSize = mobileBaseSize * this.currentScale;
            
            document.documentElement.style.setProperty('--font-size-mobile-base-scaled', scaledMobileSize + 'rem');
        }
    }

    updateIndicator() {
        const indicator = document.getElementById('fontSizeIndicator');
        if (indicator) {
            indicator.textContent = Math.round(this.currentScale * 100) + '%';
        }
    }

    saveFontScale() {
        localStorage.setItem('fontScale', this.currentScale.toString());
    }

    loadFontScale() {
        const saved = localStorage.getItem('fontScale');
        if (saved) {
            this.currentScale = Math.max(this.minScale, Math.min(this.maxScale, parseFloat(saved)));
        }
    }

    // Public method to reset to default
    resetFontScale() {
        this.currentScale = 1;
        this.applyFontScale();
        this.updateIndicator();
        this.saveFontScale();
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Only initialize if not already initialized
    if (!window.fontAccessibilityController) {
        window.fontAccessibilityController = new FontAccessibilityController();
        
        // Add keyboard shortcuts
        document.addEventListener('keydown', function(e) {
            // Ctrl/Cmd + Plus: Increase font
            if ((e.ctrlKey || e.metaKey) && (e.key === '+' || e.key === '=')) {
                e.preventDefault();
                window.fontAccessibilityController.increaseFont();
            }
            
            // Ctrl/Cmd + Minus: Decrease font
            if ((e.ctrlKey || e.metaKey) && e.key === '-') {
                e.preventDefault();
                window.fontAccessibilityController.decreaseFont();
            }
            
            // Ctrl/Cmd + 0: Reset font
            if ((e.ctrlKey || e.metaKey) && e.key === '0') {
                e.preventDefault();
                window.fontAccessibilityController.resetFontScale();
            }
        });
    }
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = FontAccessibilityController;
}