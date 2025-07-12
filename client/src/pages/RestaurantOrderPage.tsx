import { useGetRestaurantOrder } from '@/api/OrderApi'
import LoadingState from '@/components/Loader';
import { useParams } from 'react-router-dom'


import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import {  RefreshCw } from 'lucide-react';


const RestaurantOrderPage = () => {
    const {restId}=useParams();
    const {orders,isLoading}=useGetRestaurantOrder(restId);
    if(!orders) return (
        <div className='flex items-center justify-center min-h-[90vh]'>
            Sorry ! No Order Request Found
        </div>
    )
    const statusOptions = ['placed', 'preparing', 'ready', 'delivered'];

    if(isLoading)
        return <LoadingState/>
  return (
   <div className="p-6 mt-16">
      <div className="flex items-center justify-between mb-6">
        <h1 className="md:text-3xl font-bold text-base">Restaurant Orders</h1>
        <div className="flex gap-4 items-center">
          {/* <Select value={filterStatus} onValueChange={setFilterStatus}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Filter by status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All</SelectItem>
              {statusOptions.map(status => (
                <SelectItem key={status} value={status}>{status}</SelectItem>
              ))}
            </SelectContent>
          </Select> */}
          <Button size="sm" variant="outline" onClick={() => queryClient.invalidateQueries(['restaurant-orders', restaurantId])}>
            <RefreshCw className="mr-2 h-4 w-4" /> Refresh
          </Button>
        </div>
      </div>

     
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {orders.map(order => (
            <Card key={order._id} className="p-4 shadow-xl border border-orange-200">
              <CardContent>
                <h2 className="text-xl font-semibold mb-2">Order #{order._id.slice(-5)}</h2>
                <p className="mb-1">Customer: {order.user?.name || 'Unknown'}</p>
                <p className="mb-1">Total: ₹{order.total}</p>
                <Badge className="mb-3">{order.status}</Badge>
                <Select
                  defaultValue={order.status}
                  onValueChange={(newStatus) => mutation.mutate({ orderId: order._id, status: newStatus })}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {statusOptions.map(status => (
                      <SelectItem key={status} value={status}>{status}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>
          ))}
        </div>
    </div>
  )
}

export default RestaurantOrderPage;
