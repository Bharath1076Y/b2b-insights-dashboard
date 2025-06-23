
// Interfaces for sample-data.json structure

export interface Exporter {
  id: string;
  user_id: string;
  email: string;
  nationality: string;
  personal_info: {
    gender: 'male' | 'female' | 'other';
    mobile: string;
    lastName: string;
    firstName: string;
  };
  is_password_verified: boolean;
  business_info: {
    city: string;
    state: string;
    address: string;
    zipcode: string;
    ownership: 'partnership' | 'private' | 'public' | 'sole';
    companyName: string;
  };
  exporter_auth: {
    gst: string;
    iec: string;
    pan: string;
    aadhar: string;
  };
  status: 'approved' | 'pending' | 'rejected';
  created_at: string;
  updated_at: string;
  exporter_badge: 'Verified_Exporter' | 'Non_Verified_Exporter';
  documents: {
    rcmc: string;
  };
  exporter_url: {
    website: string;
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
  };
  plan: 'free' | 'premium';
}

export interface Importer {
  id: string;
  user_id: string;
  email: string;
  personal_info: {
    lastName: string;
    firstName: string;
    dateOfBirth: string;
    nationality: string;
    phoneNumber: string;
  };
  business_info: {
    taxId: string;
    address: string;
    companyName: string;
    companyType: string;
    registrationNumber: string;
  };
  documents: {
    businessLicenseUrl: string;
  };
  role: string;
  terms_accepted: boolean;
  privacy_accepted: boolean;
  data_processing_accepted: boolean;
  status: 'pending' | 'approved' | 'rejected';
  created_at: string;
  updated_at: string;
}

export interface Message {
  id: string;
  sender_email: string;
  receiver_email: string;
  content: string;
  is_read: boolean;
  created_at: string;
  updated_at: string;
  is_deleted: boolean;
  message_type: string;
}

export interface Product {
  id: string;
  seller_id: string;
  seller_email: string;
  product_number: number;
  title: string;
  category: string;
  product_type: string;
  min_order_quantity: string;
  min_order_unit: string;
  price: string;
  product_listed_type: string;
  created_at: string;
  description: string;
  key_features: string[];
  price_terms: string;
  packaging_type: string;
  packaging_material: string;
  quantity_per_package: string;
  customization_available: boolean;
  availability: string;
  supply_quantity: string;
  supply_unit: string;
  estimated_delivery: string;
  image_urls: string[];
  video_url: string;
  price_unit: string;
  product_rating: string;
  brand_name: string;
  shipment_method: string;
  net_weight_per_box: string;
  box_dimensions: string;
  labeling: string;
  quality_assurance: string;
  samples_available: string;
  hs_code: string;
  view_count: number;
  product_queries: number;
  promotion: string;
}

export interface BuyLeadApplication {
  id: string;
  seller_email: string;
  buyer_email: string;
  buy_lead_id: string;
  product_id: string;
  title: string;
  min_order_quantity: string;
  min_order_unit: string;
  price: string;
  price_unit: string;
  is_customized: boolean;
  original_min_order_quantity: string;
  original_price: string;
  message: string;
  status: 'pending' | 'accepted' | 'rejected';
  created_at: string;
  view_count: number;
  rejection_reply: string;
  updated_at: string;
}

export interface BuyLead {
  id: string;
  user_id: string;
  product_title: string;
  product_category: string;
  product_type: string;
  min_quantity: string;
  max_quantity: string;
  unit: string;
  required_for: string;
  expiry_date: string;
  description: string;
  status: 'active' | 'expired';
  view_count: number;
  created_at: string;
}

export interface ProfileVisit {
  id: string;
  exporter_user_id: string;
  visitor_email: string;
  visit_count: number;
  created_at: string;
  updated_at: string;
}

export interface ExporterSubscription {
  id: string;
  exporter_user_id: string;
  plan_type: 'free' | 'premium';
  started_at: string;
  expires_at: string;
  payment_id: string;
  order_id: string;
  amount: string;
  status: 'pending' | 'completed' | 'failed' | 'active';
  created_at: string;
  updated_at: string;
  payment_method: string;
}

export interface PayPerProductOrder {
  id: string;
  user_id: string;
  plan_id: string;
  amount: string;
  status: string;
  products_count: number;
  created_at: string;
  updated_at: string;
  payment_id: string;
  payment_signature: string;
  order_id: string;
  payment_method: string;
}

export interface ExporterNotification {
  id: string;
  exporter_user_id: string;
  title: string;
  message: string;
  type: string;
  reference_id: string;
  is_read: boolean;
  created_at: string;
  updated_at: string;
}

export interface SlotPayment {
  id: string;
  user_id: string;
  slot_id: string;
  slot_name: string;
  slot_description: string;
  amount: string;
  currency: string;
  status: string;
  payment_id: string;
  order_id: string;
  payment_signature: string;
  payment_method: string;
  razorpay_order_id: string;
  created_at: string;
  updated_at: string;
}

export interface SlotAllocation {
  id: string;
  slot_id: string;
  slot_name: string;
  category: string;
  user_id: string;
  payment_id: string;
  start_date: string;
  end_date: string;
  is_active: boolean;
  product_id: string;
  created_at: string;
  updated_at: string;
}

export interface SlotAvailability {
  id: string;
  slot_id: string;
  slot_name: string;
  category: string;
  is_available: boolean;
  current_user_id: string | null;
  current_product_id: string | null;
  current_allocation_id: string | null;
  last_updated: string;
}
