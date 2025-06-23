
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Eye, Edit, Trash2, Star, Package, DollarSign, Calendar, TrendingUp } from "lucide-react";

// Mock data based on the sample data structure
const productsData = [
  {
    id: "U0nqT9w4BP",
    seller_id: "3ca5d3db-b7f7-408b-ae75-0239087820a6",
    seller_email: "admin@gmail.com",
    product_number: 5,
    title: "Indian Fresh Dragon Fruit",
    category: "fruits",
    product_type: "dragon fruit",
    min_order_quantity: "50",
    min_order_unit: "tons",
    price: "288",
    product_listed_type: "free",
    created_at: "2025-05-31 14:27:46.084+00",
    description: "Indian Fresh Dragon Fruit—hand-harvested from organic farms in Karnataka and Maharashtra...",
    price_unit: "kg",
    product_rating: "4.5",
    brand_name: "TajFresh Dragon™",
    availability: "in-stock",
    view_count: 30,
    product_queries: 1,
    promotion: "sponsored"
  },
  {
    id: "H42PcR4_w2",
    seller_id: "3b501531-28b9-466c-a8a6-a48842cb89d6",
    seller_email: "shilpa@gmail.com",
    product_number: 3,
    title: "Fresh Mango Premium",
    category: "fruits",
    product_type: "mango",
    min_order_quantity: "25",
    min_order_unit: "tons",
    price: "22",
    product_listed_type: "premium",
    created_at: "2025-05-28 10:15:30.084+00",
    description: "Premium quality fresh mangoes from Karnataka orchards...",
    price_unit: "kg",
    product_rating: "4.8",
    brand_name: "Shipla Premium",
    availability: "in-stock",
    view_count: 45,
    product_queries: 8,
    promotion: "featured"
  },
  {
    id: "V67GhK9_x5",
    seller_id: "4d601532-38c9-477c-b8b7-b59953dc90e7",
    seller_email: "bharath@gmail.com",
    product_number: 1,
    title: "Organic Coconut Oil",
    category: "oils",
    product_type: "coconut oil",
    min_order_quantity: "100",
    min_order_unit: "liters",
    price: "15",
    product_listed_type: "free",
    created_at: "2025-06-01 08:30:15.084+00",
    description: "Cold-pressed organic coconut oil from Kerala coconuts...",
    price_unit: "liter",
    product_rating: "4.2",
    brand_name: "South Fresh",
    availability: "in-stock",
    view_count: 22,
    product_queries: 3,
    promotion: "none"
  }
];

export default function Products() {
  const getPromotionBadge = (promotion: string) => {
    switch (promotion) {
      case 'sponsored':
        return <Badge className="bg-purple-100 text-purple-800">Sponsored</Badge>;
      case 'featured':
        return <Badge className="bg-blue-100 text-blue-800">Featured</Badge>;
      default:
        return null;
    }
  };

  const getListingTypeBadge = (type: string) => {
    return type === 'premium' ? 
      <Badge variant="default">Premium</Badge> : 
      <Badge variant="outline">Free</Badge>;
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Products Management</h1>
          <p className="text-muted-foreground">
            Manage all product listings on your platform
          </p>
        </div>
        <Button>Add New Product</Button>
      </div>

      <div className="grid gap-6">
        {productsData.map((product) => (
          <Card key={product.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="text-lg bg-green-100">
                      <Package className="w-6 h-6 text-green-600" />
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl">{product.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">
                      by {product.brand_name} • {product.seller_email}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  {getPromotionBadge(product.promotion)}
                  {getListingTypeBadge(product.product_listed_type)}
                  <Badge variant="secondary">{product.category}</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">₹{product.price}/{product.price_unit}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Package className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">MOQ: {product.min_order_quantity} {product.min_order_unit}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span className="text-sm">{product.product_rating} rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{product.view_count} views</span>
                </div>
              </div>

              <div className="p-3 bg-muted/50 rounded-lg mb-4">
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {product.description}
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 mb-4 text-sm">
                <div>
                  <span className="font-medium">Product Type:</span> {product.product_type}
                </div>
                <div>
                  <span className="font-medium">Availability:</span> {product.availability}
                </div>
                <div>
                  <span className="font-medium">Queries:</span> {product.product_queries}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  Listed on {new Date(product.created_at).toLocaleDateString()}
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm">
                    <Trash2 className="w-4 h-4 mr-2" />
                    Remove
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
