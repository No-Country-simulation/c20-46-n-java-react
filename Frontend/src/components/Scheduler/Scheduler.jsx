import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { CalendarDaysIcon, Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"

export default function Component() {
    const [selectedDate, setSelectedDate] = useState(new Date())
    const [showEventDialog, setShowEventDialog] = useState(false)
    const [eventName, setEventName] = useState("")
    const [eventDescription, setEventDescription] = useState("")
    const [eventTime, setEventTime] = useState(new Date())
    const [eventDuration, setEventDuration] = useState(60)
    const [eventColor, setEventColor] = useState("#4338ca")
    const [eventReminder, setEventReminder] = useState(false)
    const [events, setEvents] = useState([])
    const handlePreviousMonth = () => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1))
    }
    const handleNextMonth = () => {
        setSelectedDate(new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1))
    }
    const handleDayClick = (date) => {
        setSelectedDate(date)
        setShowEventDialog(true)
    }
    const handleEventSubmit = () => {
        setEvents([
            ...events,
            {
                name: eventName,
                description: eventDescription,
                date: selectedDate,
                time: eventTime,
                duration: eventDuration,
                color: eventColor,
                reminder: eventReminder,
            },
        ])
        setEventName("")
        setEventDescription("")
        setEventTime(new Date())
        setEventDuration(60)
        setEventColor("#4338ca")
        setEventReminder(false)
        setShowEventDialog(false)
    }
    const daysInMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate()
    const firstDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay()
    const lastDayOfMonth = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDay()
    return (
        <div className="bg-background p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between mb-4">
                <Button variant="ghost" onClick={handlePreviousMonth}>
                    <ChevronLeftIcon className="w-5 h-5" />
                </Button>
                <div className="text-lg font-semibold">
                    {selectedDate.toLocaleString("default", { month: "long" })} {selectedDate.getFullYear()}
                </div>
                <Button variant="ghost" onClick={handleNextMonth}>
                    <ChevronRightIcon className="w-5 h-5" />
                </Button>
            </div>
            <div className="grid grid-cols-7 gap-2">
                {["Dom", "Lun", "Mar", "Mi\u00E9", "Jue", "Vie", "S\u00E1b"].map((day, index) => (
                    <div key={index} className="text-center text-muted-foreground font-medium">
                        {day}
                    </div>
                ))}
                {Array.from({ length: firstDayOfMonth }, (_, i) => (
                    <div key={`prev-${i}`} className="text-center text-muted-foreground font-medium">
                        {new Date(selectedDate.getFullYear(), selectedDate.getMonth(), -(firstDayOfMonth - i)).getDate()}
                    </div>
                ))}
                {Array.from({ length: daysInMonth }, (_, i) => (
                    <Button
                        key={i + 1}
                        variant={selectedDate.getDate() === i + 1 ? "primary" : "ghost"}
                        className={`text-center font-medium ${
                            selectedDate.getDate() === i + 1 ? "text-primary-foreground" : "text-muted-foreground"
                        }`}
                        onClick={() => handleDayClick(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), i + 1))}
                    >
                        {i + 1}
                        {events
                            .filter(
                                (event) =>
                                    event.date.getDate() === i + 1 &&
                                    event.date.getMonth() === selectedDate.getMonth() &&
                                    event.date.getFullYear() === selectedDate.getFullYear(),
                            )
                            .map((event, index) => (
                                <div
                                    key={index}
                                    className={`mt-2 rounded-md px-2 py-1 text-xs font-medium text-${event.color}-foreground bg-${event.color}`}
                                >
                                    {event.name}
                                </div>
                            ))}
                    </Button>
                ))}
                {Array.from({ length: 6 - lastDayOfMonth }, (_, i) => (
                    <div key={`next-${i}`} className="text-center text-muted-foreground font-medium">
                        {i + 1}
                    </div>
                ))}
            </div>
            <Dialog open={showEventDialog} onOpenChange={setShowEventDialog}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add Event</DialogTitle>
                        <DialogDescription>Fill in the details for your event.</DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="event-name">Event Name</Label>
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
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="event-date">Date</Label>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="w-full justify-start font-normal">
                                            {selectedDate.toLocaleDateString()}
                                            <div className="ml-auto h-4 w-4 opacity-50" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar mode="single" initialFocus />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="event-time">Time</Label>
                                <Input
                                    id="event-time"
                                    type="time"
                                    value={eventTime.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" })}
                                    onChange={(e) => {
                                        const [hours, minutes] = e.target.value.split(":")
                                        setEventTime(
                                            new Date(
                                                selectedDate.getFullYear(),
                                                selectedDate.getMonth(),
                                                selectedDate.getDate(),
                                                parseInt(hours),
                                                parseInt(minutes),
                                            ),
                                        )
                                    }}
                                />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                                <Label htmlFor="event-color">Color</Label>
                                <div className="flex items-center gap-2">
                                    <div
                                        className={`h-6 w-6 rounded-full cursor-pointer ${
                                            eventColor === "#4338ca" ? "ring-2 ring-primary" : ""
                                        }`}
                                        style={{ backgroundColor: "#4338ca" }}
                                        onClick={() => setEventColor("#4338ca")}
                                    />
                                    <div
                                        className={`h-6 w-6 rounded-full cursor-pointer ${
                                            eventColor === "#10b981" ? "ring-2 ring-primary" : ""
                                        }`}
                                        style={{ backgroundColor: "#10b981" }}
                                        onClick={() => setEventColor("#10b981")}
                                    />
                                    <div
                                        className={`h-6 w-6 rounded-full cursor-pointer ${
                                            eventColor === "#ef4444" ? "ring-2 ring-primary" : ""
                                        }`}
                                        style={{ backgroundColor: "#ef4444" }}
                                        onClick={() => setEventColor("#ef4444")}
                                    />
                                    <div
                                        className={`h-6 w-6 rounded-full cursor-pointer ${
                                            eventColor === "#fbbf24" ? "ring-2 ring-primary" : ""
                                        }`}
                                        style={{ backgroundColor: "#fbbf24" }}
                                        onClick={() => setEventColor("#fbbf24")}
                                    />
                                    <div
                                        className={`h-6 w-6 rounded-full cursor-pointer ${
                                            eventColor === "#8b5cf6" ? "ring-2 ring-primary" : ""
                                        }`}
                                        style={{ backgroundColor: "#8b5cf6" }}
                                        onClick={() => setEventColor("#8b5cf6")}
                                    />
                                    <div
                                        className={`h-6 w-6 rounded-full cursor-pointer ${
                                            eventColor === "#f97316" ? "ring-2 ring-primary" : ""
                                        }`}
                                        style={{ backgroundColor: "#f97316" }}
                                        onClick={() => setEventColor("#f97316")}
                                    />
                                    <div
                                        className={`h-6 w-6 rounded-full cursor-pointer ${
                                            eventColor === "#a855f7" ? "ring-2 ring-primary" : ""
                                        }`}
                                        style={{ backgroundColor: "#a855f7" }}
                                        onClick={() => setEventColor("#a855f7")}
                                    />
                                    <div
                                        className={`h-6 w-6 rounded-full cursor-pointer ${
                                            eventColor === "#ec4899" ? "ring-2 ring-primary" : ""
                                        }`}
                                        style={{ backgroundColor: "#ec4899" }}
                                        onClick={() => setEventColor("#ec4899")}
                                    />
                                    <div
                                        className={`h-6 w-6 rounded-full cursor-pointer ${
                                            eventColor === "#14b8a6" ? "ring-2 ring-primary" : ""
                                        }`}
                                        style={{ backgroundColor: "#14b8a6" }}
                                        onClick={() => setEventColor("#14b8a6")}
                                    />
                                    <div
                                        className={`h-6 w-6 rounded-full cursor-pointer ${
                                            eventColor === "#6b7280" ? "ring-2 ring-primary" : ""
                                        }`}
                                        style={{ backgroundColor: "#6b7280" }}
                                        onClick={() => setEventColor("#6b7280")}
                                    />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <Label htmlFor="event-reminder">Reminder</Label>
                                <div className="flex items-center space-x-2">
                                    <Checkbox id="event-reminder" checked={eventReminder} onCheckedChange={setEventReminder} />
                                    <span>Set Reminder</span>
                                </div>
                            </div>
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="event-duration">Duration (minutes)</Label>
                            <Input
                                id="event-duration"
                                type="number"
                                value={eventDuration}
                                onChange={(e) => setEventDuration(parseInt(e.target.value))}
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline" onClick={() => setShowEventDialog(false)}>
                            Cancel
                        </Button>
                        <Button onClick={handleEventSubmit}>Save Event</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

function ChevronLeftIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m15 18-6-6 6-6" />
        </svg>
    )
}


function ChevronRightIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}