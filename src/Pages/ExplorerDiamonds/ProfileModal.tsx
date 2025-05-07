import { Button, Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import SimpleModal from "../../Components/SimpleModal";
import axiosInstance from "../../Utils/axios";
import { useMutation } from "../../Utils/useQueries";

const ProfileModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (d: boolean) => void;
}) => {
  const form = useForm<{
    id: null;
    first_name: string;
    last_name: string;
    customer_type_id: null;
    primary_contact: string;
    secondary_contact: string;
    primary_email: string;
    secondary_email: string;
    whatsapp_number: string;
    pan_card_number: string;
    is_kyc_done: boolean;
    is_part_of_company: boolean;
    company_id: null;
    isvoid: boolean;
    created_at: any;
    updated_at: any;
    username: string;
    password: string;
    is_notify: boolean;
    isemailconfirmed: boolean;
    ismobilenoconfirmed: boolean;
  }>({
    defaultValues: {},
  });

  const { mutate } = useMutation({
    mutationFn: (data: any) => axiosInstance.put(`/Customer/${data.id}`, data),
    onSuccess: () => {
      setOpen(false);
    },
  });

  return (
    <SimpleModal
      open={open}
      setOpen={setOpen}
      modalTitle="Update Profile"
      footer={<Button variant="contained">Save Details</Button>}
    >
      <form
        onSubmit={(values) => {
          form.handleSubmit(() => {
            mutate(values);
          });
        }}
      >
        <Grid container spacing={2}>
          <Grid size={4}>
            <Controller
              control={form.control}
              name="username"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="Username"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid size={4}>
            <Controller
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="First Name"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid size={4}>
            <Controller
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="Last Name"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid size={6}>
            <Controller
              control={form.control}
              name="primary_contact"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="Primary Contact"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid size={6}>
            <Controller
              control={form.control}
              name="primary_email"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="Primary Email"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid size={6}>
            <Controller
              control={form.control}
              name="secondary_contact"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="Secondary Contact"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>
          <Grid size={6}>
            <Controller
              control={form.control}
              name="secondary_email"
              render={({ field }) => (
                <TextField
                  {...field}
                  size="small"
                  label="Secondary Email"
                  variant="outlined"
                  fullWidth
                />
              )}
            />
          </Grid>
        </Grid>
      </form>
    </SimpleModal>
  );
};

export default ProfileModal;
