import { Input } from "antd";
import ContactCard from "./components/ContactCard";
import SkeletonContacts from "./SkeletonContacts";
import AppLayout from "../../Layout";

import { ContactsProvider, useContactsContext } from "./contexts/ContactsContext";

const Contacts: React.FC = () => {
  const { data, isLoading, onFilter } = useContactsContext();

  return (
    <>
      <AppLayout.Header>
        <Input.Search 
          className="w-[300px]" 
          placeholder="Search contact"
          enterButton
          allowClear
          onChange={(e) => onFilter(e.target.value)}
        />
      </AppLayout.Header>

      <div className="grid grid-cols-1 laptop:grid-cols-4 gap-4 p-4">
        {
          isLoading ?
          <SkeletonContacts /> :
          data?.map((user) => (
            <div key={user.id}><ContactCard {...user}/></div>
          ))
        }
      </div>
    </>
  )
}

const ContactsPage: React.FC = () => {
  return (
    <ContactsProvider>
      <Contacts/>
    </ContactsProvider>
  )
}

export default ContactsPage;