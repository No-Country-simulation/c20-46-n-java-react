import EventDialog from "./EventDialog.jsx";
import EventForm from "./EventForm.jsx";

export default function Scheduler() {
   /* const [selectedDate, setSelectedDate] = useState(new Date())
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
        </div>
    )*/
    return(
        <div className="w-full">
            <EventDialog title="Agregar Evento">
                <EventForm />
            </EventDialog>
        </div>
    )
}