const inquiries = [];

export function getAllInquiries() {
  return [...inquiries].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
}

export function getInquiryById(id) {
  return inquiries.find(i => i.id === id);
}

export function createInquiry(data) {
  const inquiry = {
    id: Date.now().toString(),
    ...data,
    status: 'new',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  inquiries.unshift(inquiry);
  return inquiry;
}

export function updateInquiryStatus(id, status) {
  const inquiry = inquiries.find(i => i.id === id);
  if (inquiry) {
    inquiry.status = status;
    inquiry.updatedAt = new Date().toISOString();
    return inquiry;
  }
  return null;
}

export function deleteInquiry(id) {
  const index = inquiries.findIndex(i => i.id === id);
  if (index !== -1) {
    return inquiries.splice(index, 1)[0];
  }
  return null;
}