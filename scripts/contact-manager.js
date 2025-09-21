// Global Contact Management System
class ContactManager {
    constructor() {
        this.contactData = null;
        this.loaded = false;
    }

    async loadContactInfo() {
        if (this.loaded) return this.contactData;
        
        try {
            const response = await fetch('/data/contact-info.json');
            if (response.ok) {
                this.contactData = await response.json();
                this.loaded = true;
                console.log('Global contact info loaded:', this.contactData);
                return this.contactData;
            }
        } catch (error) {
            console.error('Failed to load contact info:', error);
        }
        
        // Fallback contact data
        this.contactData = {
            companyInfo: {
                name: "VIET NAM TO YOU TOURISM COMPANY LIMITED",
                address: "3rd Floor, 29T1 Building, Hoang Dao Thuy Street, Cau Giay District, Hanoi, Vietnam",
                email: "SALES@VNTOYOU.NET",
                website: "www.vntoyou.net"
            },
            contacts: [
                {
                    name: "Ms. Ngan",
                    title: "Sales Manager",
                    phone: "+84904596505",
                    whatsapp: "+84904596505",
                    primary: true
                }
            ]
        };
        this.loaded = true;
        return this.contactData;
    }

    getPrimaryContact() {
        if (!this.contactData) return null;
        return this.contactData.contacts.find(c => c.primary) || this.contactData.contacts[0];
    }

    getCompanyInfo() {
        return this.contactData?.companyInfo || null;
    }

    // Generate footer HTML
    generateFooterContact() {
        if (!this.contactData) return '';
        
        const primary = this.getPrimaryContact();
        const company = this.getCompanyInfo();
        
        // Clean address - remove emoji if it exists, we'll use Font Awesome icon
        const cleanAddress = company.address.replace(/🌍️?/g, '').trim();
        
        return `
            <div class="contact-footer">
                <p class="mb-2"><strong>Contact us:</strong></p>
                <p class="mb-1">
                    <i class="fas fa-map-marker-alt me-2"></i>
                    ${cleanAddress}
                </p>
                <p class="mb-1">
                    <a href="mailto:${company.email}" class="text-white text-decoration-none">
                        <i class="fas fa-envelope me-2"></i>Email: ${company.email}
                    </a>
                </p>
                <p class="mb-1">
                    <a href="tel:${primary.phone}" class="text-white text-decoration-none">
                        <i class="fas fa-phone me-2"></i>Hotline: ${primary.phone} (${primary.name})
                    </a>
                </p>
                <p class="mb-0">
                    <a href="https://wa.me/${primary.whatsapp.replace(/[^0-9]/g, '')}" class="text-white text-decoration-none" target="_blank">
                        <i class="fab fa-whatsapp me-2"></i>WhatsApp: ${primary.whatsapp} (${primary.name})
                    </a>
                </p>
            </div>
        `;
    }

    // Generate contact buttons
    generateContactButtons(tourTitle = '') {
        if (!this.contactData) return '';
        
        const primary = this.getPrimaryContact();
        const company = this.getCompanyInfo();
        const subject = tourTitle ? `Book ${tourTitle}` : 'Inquiry';
        const whatsappText = tourTitle ? `Hello! I'm interested in ${tourTitle}` : 'Hello! I have an inquiry';
        
        return `
            <div class="contact-buttons">
                <a href="mailto:${company.email}?subject=${encodeURIComponent(subject)}" 
                   class="contact-btn btn-email">
                   <i class="fas fa-envelope"></i> ${company.email}
                </a>
                <a href="https://wa.me/${primary.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappText)}" 
                   class="contact-btn btn-whatsapp" target="_blank">
                   <i class="fab fa-whatsapp"></i> WhatsApp ${primary.name}
                </a>
                <a href="tel:${primary.phone}" class="contact-btn btn-phone">
                   <i class="fas fa-phone"></i> Call ${primary.phone}
                </a>
            </div>
        `;
    }

    // Update all footers on page
    async updateFooters() {
        await this.loadContactInfo();
        const footers = document.querySelectorAll('.contact-footer');
        const footerHTML = this.generateFooterContact();
        
        footers.forEach(footer => {
            footer.innerHTML = footerHTML;
        });
    }
}

// Global instance
window.contactManager = new ContactManager();

// Auto-update footers when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.contactManager.updateFooters();
});