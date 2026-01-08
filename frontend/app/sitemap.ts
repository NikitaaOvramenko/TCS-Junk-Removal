import { MetadataRoute } from 'next'
import { allLocations } from './data/LocationData'

 

export default function sitemap(): MetadataRoute.Sitemap {

    const sitemapArray = []

    

    for(let i = 0; i < allLocations.length; i++){
        sitemapArray.push({
             url: `${process.env.NEXT_HOST}${allLocations[i].slug}`,

      lastModified: new Date(),

      changeFrequency: 'yearly' as const,

      priority: 1
        })
    }

    sitemapArray.push({
          url: `${process.env.NEXT_HOST}book`,

      lastModified: new Date(),

      changeFrequency: 'yearly' as const,

      priority: 1
    })

  return sitemapArray

}