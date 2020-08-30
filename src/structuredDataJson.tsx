export const structuredDataOrganization = `{
	"@context": "http://schema.org",
	"@type": "Organization",
	"legalName": "SickBox",
	"url": "https://www.sickbox.com/",
	"logo": "https://images.bewakoof.com/logos/bewakoof-logo-og.png",
	"foundingDate": "16/Dec/2020",
	"founders": [{
		"@type": "Person",
		"name": "Mr. Xyz developers"
	}],
	"contactPoint": [{
		"@type": "ContactPoint",
		"email": "sickboxday.gmail.com",
		"telephone": "9999999999",
		"contactType": "customer service"
	}],
	"address": {
		"@type": "PostalAddress",
		"addressLocality": "Mumbai",
		"addressRegion": "Mumbai",
		"addressCountry": "India",
		"postalCode": "400076"
	},
	"sameAs": [
		"https://twitter.com/sickbox",
		"https://plus.google.com/+SickBox",
		"https://www.youtube.com/sickbox",
		"https://www.linkedIn.com/sickbox",
		"https://www.instagram.com/sickbox",
		"https://in.pinterest.com/sickbox"
	]
}`;

export const structuredDataProduct = data => {
  return `{
		"@context": "http://schema.org/",
		"@type": "Product",
		"name": ${data.name},
		"image": ${data.images},
		"description": ${data.meta_description},
		"sku": ${data.id},
		"brand": "Sickbox.com",
		"offers": {
			"@type": "Offer",
			"priceCurrency": "INR",
			"price": ${data.price},
			"mrp": ${data.mrp},
			"url": "https://www.sickbox.com/p/${data.url}",
			"itemCondition": "http://schema.org/NewCondition",
			"availability": "http://schema.org/InStock",
			"seller": {
					"@type": "Organization",
					"name": "SickBox PVT LTD"
			}
		}
	}`;
};
