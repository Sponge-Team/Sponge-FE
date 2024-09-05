const formatAge = (ageInMonths) => {
  const years = Math.floor(ageInMonths / 12);
  const months = ageInMonths % 12;
  return years > 0 ? `${years}년 ${months}개월` : `${months}개월`;
};

export default formatAge;