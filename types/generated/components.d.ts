import type { Schema, Struct } from '@strapi/strapi';

export interface CoursesReviews extends Struct.ComponentSchema {
  collectionName: 'components_courses_reviews';
  info: {
    displayName: 'reviews';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    date: Schema.Attribute.Date;
    name: Schema.Attribute.String;
    rating: Schema.Attribute.Integer;
    text: Schema.Attribute.Blocks;
  };
}

export interface FeatureItemIncludes extends Struct.ComponentSchema {
  collectionName: 'components_feature_item_includes';
  info: {
    displayName: 'includes';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    label: Schema.Attribute.String;
  };
}

export interface LessonsLessons extends Struct.ComponentSchema {
  collectionName: 'components_lessons_lessons';
  info: {
    displayName: 'lessons';
  };
  attributes: {
    duration: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface LinksSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_links_social_links';
  info: {
    displayName: 'socialLink';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    link: Schema.Attribute.Text;
    type: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'courses.reviews': CoursesReviews;
      'feature-item.includes': FeatureItemIncludes;
      'lessons.lessons': LessonsLessons;
      'links.social-link': LinksSocialLink;
    }
  }
}
