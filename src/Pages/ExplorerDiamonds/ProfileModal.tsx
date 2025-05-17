import { LoadingButton } from "@mui/lab";
import { Grid, TextField } from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import SimpleModal from "../../Components/SimpleModal";
import { useAppContext } from "../../Utils/appContext";
import axiosInstance from "../../Utils/axios";
import { useMutation } from "../../Utils/useQueries";

const ProfileModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (d: boolean) => void;
}) => {
  const { userData } = useAppContext();

  const form = useForm({
    defaultValues: {
      id: userData?.id,
      first_name: userData?.first_name,
      last_name: userData?.last_name,
      customer_type_id: userData?.customer_type_id,
      primary_contact: userData?.primary_contact,
      secondary_contact: userData?.secondary_contact,
      primary_email: userData?.primary_email,
      secondary_email: userData?.secondary_email,
      whatsapp_number: userData?.whatsapp_number,
      pan_card_number: userData?.pan_card_number,
      is_kyc_done: userData?.is_kyc_done,
      is_part_of_company: userData?.is_part_of_company,
      company_id: userData?.company_id,
      isvoid: userData?.isvoid,
      created_at: userData?.created_at,
      updated_at: userData?.updated_at,
      username: userData?.username,
      password: userData?.password,
      is_notify: userData?.is_notify,
      isemailconfirmed: userData?.isemailconfirmed,
      ismobilenoconfirmed: userData?.ismobilenoconfirmed,
    },
  });

  const { mutate, isLoading } = useMutation({
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
      footer={
        <LoadingButton
          loading={isLoading}
          variant="contained"
          type="submit"
          form="profile-form"
        >
          Save Details
        </LoadingButton>
      }
    >
      <form
        id="profile-form"
        onSubmit={form.handleSubmit((values) => {
          mutate(values);
        })}
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
