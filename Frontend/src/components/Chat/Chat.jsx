import PersonIcon from '@mui/icons-material/Person';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import DoneIcon from '@mui/icons-material/Done';
import {OutlinedInput} from "@mui/material";

/**
 *
 *
 * */
export default function Chat(){
    return (
        <div className="flex h-screen">
            {/*Chats Online*/}
            <div className="flex flex-row w-64 bg-gray-100 border-r">
                <div className="flex flex-col p-4 space-y-4">
                    <div className="border-b">
                        <h4 className="py-3 text-xl font-semibold">Chats</h4>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="text-medium font-semibold">My chats</p>
                            <p className="text-medium font-semibold">3 <span className="text-gray-600">(+1 idle)</span>
                            </p>
                        </div>
                        <div className="h-48 mt-2">
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <PersonIcon/>
                                    <div className="flex-1">
                                        <p className="text-base">Kate Lampert</p>
                                        <p className="text-sm text-gray-600">
                                            Go to Profile &gt; Settings &gt; Push notifications...
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <PersonIcon/>
                                    <div className="flex-1">
                                        <p className="text-base">Greg Ashton</p>
                                        <p className="text-sm text-gray-600">
                                            Can I create custom layout for you. So can we do a meeting today?
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <PersonIcon/>
                                    <div className="flex-1">
                                        <p className="text-base">Richard Bent</p>
                                        <p className="text-sm text-gray-600">
                                            One more thing I would like to
                                            ask...
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="border-b">
                        <h4 className="py-3 text-xl font-semibold mt-4">Supervised chats</h4>
                    </div>
                    <div>
                        <div className="flex items-center justify-between">
                            <p className="text-medium font-semibold">Other chats</p>
                            <p className="text-medium font-semibold">1 <span className="text-gray-600">(+1 idle)</span>
                            </p>
                        </div>
                        <div className="h-24 mt-2">
                            <div className="space-y-2">
                                <div className="flex items-center space-x-2">
                                    <PersonIcon/>
                                    <div className="flex-1">
                                        <p className="text-base">Kate Lampert</p>
                                        <p className="text-sm text-gray-600">
                                            Go to Profile &gt; Settings &gt; Push notifications...
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <PersonIcon/>
                                    <div className="flex-1">
                                        <p className="text-base">Greg Ashton</p>
                                        <p className="text-sm text-gray-600">
                                            Can I create custom layout for you. So can we do a meeting today?
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Chat Controls*/}
                {/*<div className="flex items-center justify-around h-16 border-t">
                    <WebcamIcon className="w-6 h-6"/>
                    <UsersIcon className="w-6 h-6"/>
                    <TicketIcon className="w-6 h-6"/>
                    <UsersIcon className="w-6 h-6"/>
                    <ExpandIcon className="w-6 h-6"/>
                </div>*/}
            </div>
            {/*Chat Conversation*/}
            <div className="flex-1 flex flex-col">
                {/*Title*/}
                <div className="flex items-center justify-between h-16 px-4 border-b">
                    <div className="flex items-center space-x-2">
                        <PersonIcon/>
                        <div>
                            <h3 className="text-lg font-semibold text-center">Kate Lampert</h3>
                            <p className="text-green-400">online</p>
                        </div>
                    </div>
                    <MoreHorizIcon className="w-6 h-6"/>
                </div>
                {/*Messages*/}
                <div className="flex-1 p-4 space-y-4">
                    <div className="flex flex-col space-y-2">
                        <div className="self-start p-2 bg-gray-200 rounded-lg">
                            <p className="text-sm font-medium">Pre-chat survey</p>
                            <p className="text-sm">Your name: Kate Lampert</p>
                            <p className="text-sm">E-mail: kate.lampert@company.com</p>
                        </div>
                        <div className="self-end p-2 bg-blue-500 text-white rounded-lg text-end">
                            <p className="text-sm font-bold">Me</p>
                            <div className="flex items-center justify-between">
                                <p className="text-sm">Hello! How may I help you?</p>
                                <DoneIcon/>
                            </div>
                        </div>
                        <div className="self-start p-2 bg-gray-200 rounded-lg">
                            <p className="text-sm font-bold">Kate Lampert</p>
                            <p className="text-sm">Hello!</p>
                            <p className="text-sm">How to turn off push notifications on mobile?</p>
                        </div>
                        <div className="self-end p-2 bg-blue-500 text-white rounded-lg text-end">
                            <p className="text-sm font-bold">Me</p>
                            <div className="flex items-center justify-between">
                                <p className="text-sm">Go to Profile &gt; Settings &gt; Push notifications and switch to
                                    off. Simple as
                                    that.</p>
                                <DoneIcon/>
                            </div>
                        </div>
                    </div>

                </div>
                {/**/}
                <div className="flex items-center p-4 border-t">
                    <OutlinedInput
                        name="message"
                        id="message"
                        type="text"
                        variant="outlined"
                        placeholder="Type a message..."
                        fullWidth
                        hiddenLabel
                        color="primary"
                        size="small"
                        className="flex-1"
                    />
                    <button type="submit"
                            className="ml-2 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Send
                    </button>
                </div>
            </div>
        </div>
        /*<div className="flex h-screen">
            {}
            <div className="flex-1 flex flex-col">

                //TODO:
                <div className="flex items-center p-4 border-t">
                    <Input type="text" placeholder="Type a message..." className="flex-1" />
                    <Button className="ml-2">Send</Button>
                </div>
            </div>
            {}
            <div className="w-72 bg-gray-100 border-l">
                <div className="flex items-center justify-between h-16 px-4 border-b">
                    <Label className="text-lg font-semibold">Details</Label>
                    <DoorClosedIcon className="w-6 h-6" />
                </div>
                <div className="p-4 space-y-4">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center space-x-2">
                                <Avatar>
                                    <div />
                                    <div>KL</div>
                                </Avatar>
                                <div>
                                    <Label className="font-medium">Kate Lampert</Label>
                                    <p className="text-sm text-muted-foreground">kate.lampert@company.com</p>
                                    <p className="text-sm text-muted-foreground">3:33 pm local time</p>
                                    <p className="text-sm text-muted-foreground">New York, NY, United States</p>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <img src="/placeholder.svg" alt="Map" className="w-full h-32 rounded-lg" />
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Label className="font-medium">Pre-chat survey</Label>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">Your name: Kate Lampert</p>
                            <p className="text-sm">E-mail: kate.lampert@company.com</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Label className="font-medium">Visited pages</Label>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">Visits: 2 pages in 7m 16s</p>
                            <p className="text-sm">LiveChat Pricing | LiveChat Plans</p>
                            <p className="text-sm">LiveChat Partner Program</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <Label className="font-medium">Additional info</Label>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">...</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>*/
    )
}