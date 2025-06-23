
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Eye, Mail, MapPin, Building, Calendar, FileText, CheckCircle, Clock } from "lucide-react";

// Mock data based on the sample data structure
const importersData = [
  {
    id: "85f74530-2c56-4eaf-9e40-f999c17cf3b0",
    user_id: "744b86b5-a845-4ba4-be09-cd277c6b039e",
    email: "user1@gmail.com",
    personal_info: {
      lastName: "1",
      firstName: "User",
      dateOfBirth: "2025-05-24T18:30:00.000Z",
      nationality: "Italy",
      phoneNumber: "7777444455"
    },
    business_info: {
      taxId: "123456789",
      address: "Italy",
      companyName: "User Company",
      companyType: "sole_proprietorship",
      registrationNumber: "202312345678"
    },
    documents: {
      businessLicenseUrl: "business_license_1748174975917_Project Front Pages.pdf"
    },
    role: "buyer",
    terms_accepted: true,
    privacy_accepted: true,
    data_processing_accepted: true,
    status: "pending" as const,
    created_at: "2025-05-25 12:10:05.377+00",
    updated_at: "2025-05-25 12:10:13.244032+00"
  },
  {
    id: "75f74530-2c56-4eaf-9e40-f999c17cf3b1",
    user_id: "644b86b5-a845-4ba4-be09-cd277c6b039f",
    email: "buyer@germany.com",
    personal_info: {
      lastName: "Mueller",
      firstName: "Hans",
      dateOfBirth: "1980-03-15T18:30:00.000Z",
      nationality: "Germany",
      phoneNumber: "49301234567"
    },
    business_info: {
      taxId: "DE987654321",
      address: "Berlin, Germany",
      companyName: "European Fresh Imports GmbH",
      companyType: "corporation",
      registrationNumber: "HRB12345"
    },
    documents: {
      businessLicenseUrl: "german_business_license.pdf"
    },
    role: "buyer",
    terms_accepted: true,
    privacy_accepted: true,
    data_processing_accepted: true,
    status: "approved" as const,
    created_at: "2025-04-15 08:20:15.377+00",
    updated_at: "2025-04-16 10:15:13.244032+00"
  }
];

export default function Importers() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-4 h-4 text-green-500" />;
      case 'pending':
        return <Clock className="w-4 h-4 text-yellow-500" />;
      default:
        return <Clock className="w-4 h-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'default';
      case 'pending':
        return 'secondary';
      case 'rejected':
        return 'destructive';
      default:
        return 'secondary';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Importers Management</h1>
          <p className="text-muted-foreground">
            Manage and monitor all registered importers/buyers on your platform
          </p>
        </div>
        <Button>Add New Importer</Button>
      </div>

      <div className="grid gap-6">
        {importersData.map((importer) => (
          <Card key={importer.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="text-lg">
                      {importer.personal_info.firstName[0]}{importer.personal_info.lastName[0]}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-xl flex items-center gap-2">
                      {importer.personal_info.firstName} {importer.personal_info.lastName}
                      {getStatusIcon(importer.status)}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground">{importer.business_info.companyName}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant={getStatusColor(importer.status)}>
                    {importer.status}
                  </Badge>
                  <Badge variant="outline">
                    {importer.role}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{importer.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{importer.business_info.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">{importer.business_info.companyType.replace(/_/g, ' ')}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm">Joined {new Date(importer.created_at).toLocaleDateString()}</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                <h4 className="text-sm font-medium mb-2">Business Information</h4>
                <div className="grid md:grid-cols-2 gap-2 text-sm">
                  <div>Tax ID: {importer.business_info.taxId}</div>
                  <div>Registration: {importer.business_info.registrationNumber}</div>
                  <div>Nationality: {importer.personal_info.nationality}</div>
                  <div>Phone: {importer.personal_info.phoneNumber}</div>
                </div>
              </div>

              <div className="flex gap-2 mt-4">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  View Profile
                </Button>
                <Button variant="outline" size="sm">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
                <Button variant="outline" size="sm">
                  <FileText className="w-4 h-4 mr-2" />
                  View Documents
                </Button>
                {importer.status === 'pending' && (
                  <Button size="sm">
                    Approve Account
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
