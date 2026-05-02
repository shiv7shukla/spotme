'use client'

import { Button } from "@/components/ui/button";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { usePathname } from "next/navigation";
import { spaceSchema } from "@/app/schemas/space.schema";
import { createSpace } from "@/app/organizer/actions";

interface SpaceFormInput {
    spaceName: string,
    password: string
};

const SpaceForm = () => {

    const pathname = usePathname();
    const { 
        register, 
        handleSubmit, 
        formState:{ errors, isSubmitting } 
    } = useForm<SpaceFormInput>({
        defaultValues: {
            spaceName: "",
            password: ""
        },
        resolver: zodResolver(spaceSchema),
        mode: "onSubmit"
    });
    const onSubmit: SubmitHandler<SpaceFormInput> = async(data) => {
        await createSpace(data);
    }

    return (
        <div className="glass-card p-6 sm:p-8">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-5 mb-8">
                    <div>
                        <label className="font-body text-sm font-medium text-foreground block mb-2">Space name</label>
                        <input
                            type="text"
                            {...register("spaceName")}
                            placeholder="Sarah &amp; Tom&apos;s Wedding"
                            className="w-full h-10 px-3 rounded-lg border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-foreground/20 transition-all"
                        />
                        {errors.spaceName && (<p className="text-red-500 text-xs sm:text-sm">{String(errors.spaceName?.message)}</p>)}
                    </div>
                    <div>
                        <label className="font-body text-sm font-medium text-foreground block mb-2">Access password</label>
                        <input
                            type="password"
                            {...register("password")}
                            placeholder={`${pathname === "organizer"?"Something memorable for your guests" : "From your organizer"}`}
                            className="w-full h-10 px-3 rounded-lg border border-input bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/20 focus:border-foreground/20 transition-all"
                        />
                        {errors.password && (<p className="text-red-500 text-xs sm:text-sm">{String(errors.password?.message)}</p>)}
                    </div>
                </div>
                <Button
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                >
                    {`${pathname === "organizer"?"Create Space" : "Enter Space"}`}
                </Button>
            </form>
        </div>
    );
};

export default SpaceForm;
