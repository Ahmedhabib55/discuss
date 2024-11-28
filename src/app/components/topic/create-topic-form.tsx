"use client";
import { useFormState, useFormStatus } from "react-dom";
import {
  Button,
  Input,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@nextui-org/react";
import React from "react";
import * as actions from "@/actions";
import FormButton from "../common/form-button";

const CreateTopicForm = () => {
  const { pending } = useFormStatus();
  const [formState, action] = useFormState(actions.createTopic, {
    errors: {},
  });

  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create topic </Button>
      </PopoverTrigger>

      <PopoverContent>
        <form action={action}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-2xl font-bold">Create topic</h3>

            <Input
              name="name"
              label="name"
              labelPlacement="outside"
              placeholder="name"
              isInvalid={!!formState.errors?.name}
              errorMessage={formState.errors?.name}
              isDisabled={pending}
            />

            <Textarea
              name="description"
              label="topic description"
              labelPlacement="outside"
              placeholder="description"
              isInvalid={!!formState.errors?.description}
              errorMessage={formState.errors?.description}
              isDisabled={pending}
            />
            {formState.errors?._form && (
              <div className="bg-red-500 text-sm border-red-600 border-2 rounded-md p-2">
                {formState.errors?._form.join(", ")}
              </div>
            )}
            <FormButton>Save</FormButton>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default CreateTopicForm;
