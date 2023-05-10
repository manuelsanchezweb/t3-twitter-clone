import type { InferGetStaticPropsType, NextPage } from "next";

const ProfilePage: NextPage<InferGetStaticPropsType<any>> = ({ id }) => {
  return <div>Profile {id}</div>;
};

export default ProfilePage;
