import { useQuery } from "@tanstack/react-query";
import { Card, Skeleton } from "antd"

import { HeartOutlined, EditOutlined, DeleteOutlined, MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";

import { User } from "../../../lib/types/user";

import './ContactCard.scss';

const ContactCard: React.FC<User> = ({...user}) => {
  const { data: photoUrl, isLoading } = useQuery<string>(
    [`contact-photo-${user.id}`],
    () => fetch(`https://avatars.dicebear.com/v2/avataaars/${user.username}.svg?options[mood][]=happy`).then((res) => res.blob()).then(URL.createObjectURL),
  );

  return (
    <Card
      data-testid="contact-card"
      hoverable
      cover={(
        isLoading ? 
        <div className="card-cover-skeleton"><Skeleton.Image active /></div> : 
        <img src={photoUrl} alt={`contact-img-${user.username}`} />
      )}
      actions={[
        <HeartOutlined key="heart" />,
        <EditOutlined key="edit" />,
        <DeleteOutlined key="delete" />,
      ]}
    >
      <Card.Meta 
        title={user.name}
        description={
          <>
            <div><MailOutlined/> {user.email}</div>
            <div><PhoneOutlined/> {user.phone}</div>
            <div><GlobalOutlined/> {user.website}</div>
          </>
        }
      />
    </Card>
  )
}

export default ContactCard;