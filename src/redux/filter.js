export const filterContacts = (contacts, filter) => {
  if (!contacts) return [];
  const result = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase()),
  );

  // Сортируем по времени создания => новый контакт ставим в начало списка
  const sortedContacts = [...result].sort((a, b) =>
    b.createdAt.localeCompare(a.createdAt),
  );
  return sortedContacts.length > 0 ? sortedContacts : contacts;
};
