import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { orderType } from './orderType'
import { productType } from './productType'
import { brandType } from './brandTypes'
import { blogType } from './blogType'
import { blogCategoryType } from './blogCategoryType'
import { blockContentType } from './blockContentType'
import { authorType } from './authorType'
import { addressType } from './addressType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [categoryType , orderType , productType , brandType , blogType , blogCategoryType , blockContentType , authorType , addressType ],
}
