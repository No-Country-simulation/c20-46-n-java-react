
export default function EventForm(){
    return(
        <div className="grid gap-4 py-4">
            <div className="grid gap-2">
                <label htmlFor="event-name"
                       className="block mb-2 text-sm font-medium text-gray-900 text-left">
                    Nombre del Evento:
                </label>
                <Input
                    id="event-name"
                    value={eventName}
                    onChange={(e) => setEventName(e.target.value)}
                    placeholder="Event Name"
                />
            </div>
            <div className="grid gap-2">
                <Label htmlFor="event-description">Description</Label>
                <Textarea
                    id="event-description"
                    value={eventDescription}
                    onChange={(e) => setEventDescription(e.target.value)}
                    placeholder="Event Description"
                />
            </div>
        </div>
    )
}