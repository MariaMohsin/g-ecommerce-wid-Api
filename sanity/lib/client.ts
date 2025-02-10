
import { apiVersion, dataset, projectId } from '../env'
import { createClient } from 'next-sanity'

export const client = createClient({
  projectId,  
  dataset,
  apiVersion,
  useCdn: true, // Use false to always get fresh data
})
















