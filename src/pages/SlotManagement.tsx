
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Grid3X3, CheckCircle, XCircle, Calendar, DollarSign, Package, Eye } from "lucide-react";

// Mock data based on the sample data structure
const slotData = [
  {
    id: "c3d4e5f6-g7h8-9012-cdef-345678901234",
    slot_id: "premium_fruits",
    slot_name: "Premium Slot",
    category: "fruits",
    is_available: false,
    current_user_email: "admin@gmail.com",
    current_product_title: "Indian Fresh Dragon Fruit",
    current_allocation: {
      start_date: "2025-06-18 10:35:00.000+00",
      end_date: "2025-07-18 10:35:00.000+00",
      amount: "999.00"
    },
    last_updated: "2025-06-18 10:35:00.000+00"
  },
  {
    id: "d4e5f6g7-h8i9-0123-defg-456789012345",
    slot_id: "slot1_fruits",
    slot_name: "Slot 1",
    category: "fruits",
    is_available: true,
    current_user_email: null,
    current_product_title: null,
    current_allocation: null,
    last_updated: "2025-06-18 10:00:00.000+00"
  },
  {
    id: "e5f6g7h8-i9j0-1234-efgh-567890123456",
    slot_id: "slot2_fruits",
    slot_name: "Slot 2",
    category: "fruits",
    is_available: true,
    current_user_email: null,
    current_product_title: null,
    current_allocation: null,
    last_updated: "2025-06-18 10:00:00.000+00"
  },
  {
    id: "f6g7h8i9-j0k1-2345-fghi-678901234567",
    slot_id: "slot3_fruits",
    slot_name: "Slot 3",
    category: "fruits",
    is_available: true,
    current_user_email: null,
    current_product_title: null,
    current_allocation: null,
    last_updated: "2025-06-18 10:00:00.000+00"
  },
  {
    id: "g7h8i9j0-k1l2-3456-ghij-789012345678",
    slot_id: "premium_vegetables",
    slot_name: "Premium Slot",
    category: "vegetables",
    is_available: true,
    current_user_email: null,
    current_product_title: null,
    current_allocation: null,
    last_updated: "2025-06-18 10:00:00.000+00"
  },
  {
    id: "h8i9j0k1-l2m3-4567-hijk-890123456789",
    slot_id: "slot1_vegetables",
    slot_name: "Slot 1",
    category: "vegetables",
    is_available: true,
    current_user_email: null,
    current_product_title: null,
    current_allocation: null,
    last_updated: "2025-06-18 10:00:00.000+00"
  }
];

export default function SlotManagement() {
  const getAvailabilityIcon = (isAvailable: boolean) => {
    return isAvailable ? 
      <CheckCircle className="w-4 h-4 text-green-500" /> : 
      <XCircle className="w-4 h-4 text-red-500" />;
  };

  const getAvailabilityBadge = (isAvailable: boolean) => {
    return isAvailable ? 
      <Badge className="bg-green-100 text-green-800">Available</Badge> : 
      <Badge variant="destructive">Occupied</Badge>;
  };

  const getSlotTypeBadge = (slotName: string) => {
    return slotName === 'Premium Slot' ? 
      <Badge variant="default">Premium</Badge> : 
      <Badge variant="outline">Standard</Badge>;
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const groupedSlots = slotData.reduce((acc, slot) => {
    if (!acc[slot.category]) {
      acc[slot.category] = [];
    }
    acc[slot.category].push(slot);
    return acc;
  }, {} as Record<string, typeof slotData>);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Slot Management</h1>
          <p className="text-muted-foreground">
            Manage premium slots and product placements
          </p>
        </div>
        <Button>
          <Grid3X3 className="w-4 h-4 mr-2" />
          Create New Slot
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Total Slots</p>
                <p className="text-2xl font-bold">{slotData.length}</p>
              </div>
              <Grid3X3 className="h-8 w-8 text-blue-500 ml-auto" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Available</p>
                <p className="text-2xl font-bold">{slotData.filter(s => s.is_available).length}</p>
              </div>
              <CheckCircle className="h-8 w-8 text-green-500 ml-auto" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Occupied</p>
                <p className="text-2xl font-bold">{slotData.filter(s => !s.is_available).length}</p>
              </div>
              <XCircle className="h-8 w-8 text-red-500 ml-auto" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center">
              <div>
                <p className="text-sm font-medium text-muted-foreground">Monthly Revenue</p>
                <p className="text-2xl font-bold">₹999</p>
              </div>
              <DollarSign className="h-8 w-8 text-green-500 ml-auto" />
            </div>
          </CardContent>
        </Card>
      </div>

      {Object.entries(groupedSlots).map(([category, slots]) => (
        <div key={category} className="space-y-4">
          <h2 className="text-xl font-semibold capitalize">{category} Slots</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {slots.map((slot) => (
              <Card key={slot.id} className="hover:shadow-md transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg">{slot.slot_name}</CardTitle>
                      {getAvailabilityIcon(slot.is_available)}
                    </div>
                    <div className="flex items-center gap-2">
                      {getAvailabilityBadge(slot.is_available)}
                      {getSlotTypeBadge(slot.slot_name)}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {!slot.is_available && slot.current_allocation ? (
                    <div className="space-y-3">
                      <div className="p-3 bg-muted/50 rounded-lg">
                        <div className="flex items-center gap-2 mb-2">
                          <Package className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium text-sm">{slot.current_product_title}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">by {slot.current_user_email}</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>Start: {formatDate(slot.current_allocation.start_date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>End: {formatDate(slot.current_allocation.end_date)}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-muted-foreground" />
                          <span>₹{slot.current_allocation.amount}</span>
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                        <Button variant="outline" size="sm">
                          Extend Booking
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="p-3 bg-green-50 rounded-lg text-center">
                        <p className="text-sm text-green-700">This slot is available for booking</p>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" className="flex-1">
                          Book Slot
                        </Button>
                        <Button variant="outline" size="sm">
                          Configure
                        </Button>
                      </div>
                    </div>
                  )}
                  
                  <div className="mt-3 pt-3 border-t text-xs text-muted-foreground">
                    Last updated: {formatDate(slot.last_updated)}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
