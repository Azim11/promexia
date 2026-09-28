import { useEffect } from 'react';
import contactInfo from '../data/contactInfo';

export default function SEO({ title, description, path }) {
  useEffect(() => {
    // Set Document Title
    const siteName = contactInfo.companyName;
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    document.title = fullTitle;

    // Set Meta Description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || contactInfo.description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.name = "description";
      metaDescription.content = description || contactInfo.description;
      document.head.appendChild(metaDescription);
    }

    // Set Canonical Link
    const isHttpUrl = contactInfo.url && (contactInfo.url.startsWith('http://') || contactInfo.url.startsWith('https://'));
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const baseUrl = isHttpUrl 
      ? (contactInfo.url.endsWith('/') ? contactInfo.url.slice(0, -1) : contactInfo.url)
      : origin;
    const fullUrl = `${baseUrl}${path || ''}`;
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', fullUrl);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = fullUrl;
      document.head.appendChild(canonicalLink);
    }

    // Set Open Graph Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);
    
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', fullUrl);
    
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description || contactInfo.description);

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) ogImage.setAttribute('content', `${baseUrl}/og-image.png`);

    // Set Twitter Tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]');
    if (twitterTitle) twitterTitle.setAttribute('content', fullTitle);
    
    const twitterUrl = document.querySelector('meta[property="twitter:url"]');
    if (twitterUrl) twitterUrl.setAttribute('content', fullUrl);
    
    const twitterDesc = document.querySelector('meta[property="twitter:description"]');
    if (twitterDesc) twitterDesc.setAttribute('content', description || contactInfo.description);

    const twitterImage = document.querySelector('meta[property="twitter:image"]');
    if (twitterImage) twitterImage.setAttribute('content', `${baseUrl}/og-image.png`);

  }, [title, description, path]);

  return null;
}
