export interface Room {
    availableRooms: number;
    bookedRooms: number;
    totalRooms: number;
}

export interface RoomList{
    roomType: string;
    amenities: string;
    price: number;
    photos: string;
    checkinTime: Date;
    checkOutTime: Date;
}
