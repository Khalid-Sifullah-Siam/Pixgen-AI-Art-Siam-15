"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope } from "@gravity-ui/icons";
import { Button, FieldError, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit } from "react-icons/bi";
import { FaUser } from "react-icons/fa";

export function UpdateUserForm() {

  const handleUserUpdate = async (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const image = e.target.image.value;

    await authClient.updateUser({
      name,
      image,
    });

    alert("You have updated your information.");
  };

  return (
    <Modal>
      <Button>
        <BiEdit />
        Edit Profile
      </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <FaUser className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Profile</Modal.Heading>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                <form onSubmit={handleUserUpdate} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text">
                    <Label>Name</Label>
                    <Input placeholder="Enter your name" />
                  </TextField>

                  <TextField name="image" type="text">
                    <Label>Image URL</Label>
                    <Input placeholder="Image URL" />
                    <FieldError />
                  </TextField>

                  {/* Submit + Cancel buttons */}
                  <div className="flex justify-end gap-3 mt-4">
                    <Button slot="close" variant="secondary" type="button">
                      Cancel
                    </Button>
                    <Button type="submit" slot="close">Save</Button>
                  </div>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
