import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {useState} from "react";
import {TextField} from "@mui/material";

export default function EventDialog({children, title}){
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickClose = () => {
        setOpen(false);
    };

    return(
        <>
            <Button variant="contained" onClick={handleClickOpen}>
                Open dialog
            </Button>
            <Dialog
                open={open}
                onClose={handleClickClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                /*PaperProps={{
                    component: 'form',
                    onSubmit: (event) => {
                        event.preventDefault();
                        const formData = new FormData(event.currentTarget);
                        const formJson = Object.fromEntries(formData.entries());

                        //TODO: Call api
                        const email = formJson.email;
                        console.log(email);

                        handleClickClose();
                    },
                }}*/
            >
                <DialogTitle id="alert-dialog-title">
                    {title}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Completa los detalles de tu evento
                    </DialogContentText>
                    {children}
                </DialogContent>
                {/*<DialogActions>
                    <Button onClick={handleClickClose}>Disagree</Button>
                    <Button type="submit">Subscribe</Button>
                </DialogActions>*/}
            </Dialog>
            {/*<Dialog open={showEventDialog} onOpenChange={setShowEventDialog}>
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
            </Dialog>*/}
        </>
    )
}