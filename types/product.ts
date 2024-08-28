export interface Product {
  id: string;
  name: string;
  data?: {
    color?: string;
    Color?: string;
    capacity?: string;
    price?: number;
    Price?: number;
    generation?: string;
    Generation?: string;
    year?: number;
    'CPU model'?: string;
    'Hard disk size'?: string;
    'Strap Colour'?: string;
    'Case Size'?: string;
    Description?: string;
    'capacity GB'?: number;
    Capacity?: string;
    'Screen size'?: number;
  };
}
