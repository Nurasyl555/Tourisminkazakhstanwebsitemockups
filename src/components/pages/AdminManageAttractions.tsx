import { Header } from "../Header";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table";
import { Badge } from "../ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Label } from "../ui/label";
import { Textarea } from "../ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Plus, Pencil, Trash2, Search } from "lucide-react";
import { useState } from "react";

interface AdminManageAttractionsProps {
  onNavigate: (page: string) => void;
}

const attractions = [
  {
    id: 1,
    name: "Charyn Canyon",
    region: "Almaty Region",
    category: "Natural Wonder",
    status: "Active",
    visitors: 3421
  },
  {
    id: 2,
    name: "Kolsai Lakes",
    region: "Almaty Region",
    category: "Lake",
    status: "Active",
    visitors: 2890
  },
  {
    id: 3,
    name: "Almaty City",
    region: "Almaty",
    category: "City",
    status: "Active",
    visitors: 2654
  },
  {
    id: 4,
    name: "Big Almaty Lake",
    region: "Almaty Region",
    category: "Lake",
    status: "Active",
    visitors: 2103
  },
  {
    id: 5,
    name: "Altyn Emel National Park",
    region: "Almaty Region",
    category: "National Park",
    status: "Active",
    visitors: 1876
  },
  {
    id: 6,
    name: "Singing Dune",
    region: "Almaty Region",
    category: "Natural Wonder",
    status: "Draft",
    visitors: 0
  }
];

export function AdminManageAttractions({ onNavigate }: AdminManageAttractionsProps) {
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header isLoggedIn isAdmin onNavigate={onNavigate} />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="mb-2">Manage Attractions</h1>
              <p className="text-gray-600">Add, edit, or remove tourist destinations</p>
            </div>
            <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-[#0A4B78] hover:bg-[#083A5E]">
                  <Plus className="w-4 h-4 mr-2" />
                  Add New Attraction
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Add New Attraction</DialogTitle>
                  <DialogDescription>
                    Fill in the details to create a new tourist destination
                  </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="attr-name">Attraction Name</Label>
                      <Input id="attr-name" placeholder="e.g., Charyn Canyon" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="attr-region">Region</Label>
                      <Select>
                        <SelectTrigger id="attr-region">
                          <SelectValue placeholder="Select region" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="almaty">Almaty Region</SelectItem>
                          <SelectItem value="astana">Astana</SelectItem>
                          <SelectItem value="central">Central Kazakhstan</SelectItem>
                          <SelectItem value="west">West Kazakhstan</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="attr-category">Category</Label>
                      <Select>
                        <SelectTrigger id="attr-category">
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="natural">Natural Wonder</SelectItem>
                          <SelectItem value="cultural">Cultural</SelectItem>
                          <SelectItem value="city">City</SelectItem>
                          <SelectItem value="lake">Lake</SelectItem>
                          <SelectItem value="mountain">Mountains</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="attr-status">Status</Label>
                      <Select defaultValue="active">
                        <SelectTrigger id="attr-status">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="active">Active</SelectItem>
                          <SelectItem value="draft">Draft</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="attr-description">Description</Label>
                    <Textarea 
                      id="attr-description" 
                      placeholder="Describe the attraction..."
                      rows={4}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="attr-image">Image URL</Label>
                    <Input id="attr-image" placeholder="https://..." />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="attr-lat">Latitude</Label>
                      <Input id="attr-lat" placeholder="43.3497" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="attr-lng">Longitude</Label>
                      <Input id="attr-lng" placeholder="79.0828" />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                    Cancel
                  </Button>
                  <Button className="bg-[#0A4B78] hover:bg-[#083A5E]" onClick={() => setIsAddDialogOpen(false)}>
                    Create Attraction
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>

          {/* Search and Filters */}
          <div className="bg-white p-4 rounded-lg shadow-md mb-6">
            <div className="grid md:grid-cols-4 gap-4">
              <div className="relative md:col-span-2">
                <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
                <Input 
                  placeholder="Search attractions..." 
                  className="pl-10"
                />
              </div>
              <Select defaultValue="all-regions">
                <SelectTrigger>
                  <SelectValue placeholder="Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-regions">All Regions</SelectItem>
                  <SelectItem value="almaty">Almaty Region</SelectItem>
                  <SelectItem value="astana">Astana</SelectItem>
                  <SelectItem value="central">Central Kazakhstan</SelectItem>
                </SelectContent>
              </Select>
              <Select defaultValue="all-status">
                <SelectTrigger>
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-status">All Status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="draft">Draft</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Attractions Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Region</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Visitors</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {attractions.map((attraction) => (
                <TableRow key={attraction.id}>
                  <TableCell>{attraction.id}</TableCell>
                  <TableCell>{attraction.name}</TableCell>
                  <TableCell>{attraction.region}</TableCell>
                  <TableCell>{attraction.category}</TableCell>
                  <TableCell>
                    <Badge variant={attraction.status === 'Active' ? 'default' : 'secondary'}>
                      {attraction.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{attraction.visitors.toLocaleString()}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="sm">
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-6">
          <p className="text-sm text-gray-600">
            Showing 1-6 of 248 attractions
          </p>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">
              Next
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
