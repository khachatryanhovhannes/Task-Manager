import { Flex, Collapse, Button } from "@chakra-ui/react";
import {
  ChangePasswordForm,
  ChangeUserData,
  ErrorMessage,
  Loader,
} from "../../components";
import { useAppSelector } from "../../hooks";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Setting() {
  const user = useAppSelector((state) => state.users.user);
  const navigate = useNavigate();
  const [userDataVisible, setUserDataVisible] = useState(false);
  const [passwordFormVisible, setPasswordFormVisible] = useState(false);
  const { isLoading, error, isSaveChnages } = useAppSelector(
    (state) => state.users
  );
  useEffect(() => {
    if (isSaveChnages) {
      navigate("/user");
    }
  }, [isSaveChnages]);
  const toggleUserData = () => {
    setUserDataVisible(!userDataVisible);
    setPasswordFormVisible(false);
  };

  const togglePasswordForm = () => {
    setUserDataVisible(false);
    setPasswordFormVisible(!passwordFormVisible);
  };

  return (
    <>
      {error && <ErrorMessage text={error} />}
      {isLoading ? (
        <Loader />
      ) : (
        <Flex
          minH={"500px"}
          w={"100%"}
          mt={"50px"}
          mb={"20px"}
          gap={"20px"}
          justifyContent={{
            sm: "flex-start",
            base: "flex-start",
            md: "space-evenly",
          }}
          alignItems={{ sm: "center", base: "center", xl: "start" }}
          direction={{ sm: "column", base: "column", xl: "row" }}
        >
          <Flex
            alignItems={"center"}
            direction={"column"}
            minW={"40%"}
            w={"90%"}
          >
            <Button onClick={toggleUserData}>Change your data</Button>
            <Collapse in={userDataVisible}>
              <ChangeUserData
                firstName={user?.firstName}
                lastName={user?.lastName}
                newEmail={user?.email}
              />
            </Collapse>
          </Flex>
          <Flex
            alignItems={"center"}
            direction={"column"}
            minW={"40%"}
            w={"90%"}
          >
            <Button onClick={togglePasswordForm}>Change your Password</Button>
            <Collapse in={passwordFormVisible}>
              <ChangePasswordForm />
            </Collapse>
          </Flex>
        </Flex>
      )}
    </>
  );
}

export default Setting;
