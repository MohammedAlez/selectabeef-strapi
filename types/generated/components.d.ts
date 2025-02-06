import type { Schema, Attribute } from '@strapi/strapi';

export interface OrderOrderItems extends Schema.Component {
  collectionName: 'components_order_order_items';
  info: {
    displayName: 'order_items';
    icon: 'briefcase';
  };
  attributes: {
    weigth: Attribute.String;
    product: Attribute.Relation<
      'order.order-items',
      'oneToOne',
      'api::product.product'
    >;
    quantity: Attribute.Integer;
  };
}

export interface ProductPrices extends Schema.Component {
  collectionName: 'components_product_prices';
  info: {
    displayName: 'prices';
    icon: 'priceTag';
    description: '';
  };
  attributes: {
    price: Attribute.Decimal & Attribute.Required;
    weigth: Attribute.String & Attribute.Required;
    discount_price: Attribute.Decimal;
  };
}

export interface WebsiteInformationSlides extends Schema.Component {
  collectionName: 'components_website_information_slides';
  info: {
    displayName: 'slides';
    icon: 'apps';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'order.order-items': OrderOrderItems;
      'product.prices': ProductPrices;
      'website-information.slides': WebsiteInformationSlides;
    }
  }
}
