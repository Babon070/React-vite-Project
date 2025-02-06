import TaskItem from "@/components/shared/task-item";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { BadgePlus } from "lucide-react";

const Dashboard = () => {
    return (
        <div className="h-screen max-w-6xl mx-auto flex items-center">
            <div className="grid grid-cols-2 w-full gap-8">
                <div className="flex flex-col space-y-3">
                    <div className="w-full p-4 rounded-md flex justify-between bg-gradient-to-t from-background to-secondary">
                        <div className="text-2xl font-bold">Training</div>
                        <Button size={'icon'}>
                            <BadgePlus />
                        </Button>
                    </div>
                    <Separator />
                    <div className="w-full p-4 rounded-md flex justify-between bg-gradient-to-b from-background to-secondary relative min-h-60">
                        <div className="flex flex-col space-y-3">
                            {Array.from({length: 3}).map((_, idx) => (
                                <TaskItem/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
