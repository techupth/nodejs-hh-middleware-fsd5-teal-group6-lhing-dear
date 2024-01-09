// middleware ทำหน้าที่ Validate ข้อมูลใน Body ที่ส่งเข้ามาสร้างและแก้ไขแบบทดสอบ
export const validateAssignmentData = (req, res, next) => {
  const assignmentData = req.body;

  //Request จะต้องมี Title และจะต้องมีความยาวไม่เกิน 35 ตัวอักษร
  if (assignmentData.title.length > 35) {
    return res.json({ message: "Title must not be over 35 characters" });
  }
  // Request จะต้องมี Description และจะต้องมีความยาวไม่เกิน 150 ตัวอักษร
  if (assignmentData.description.length > 150) {
    return res.json({ message: "Description must not exceed 150 characters" });
  }
  //  Request จะต้องมี Categories อย่างน้อย 1 อัน และ Categories จะต้องส่งมาเป็น Array
  if (
    !Array.isArray(assignmentData.categories) ||
    assignmentData.categories.length < 1
  ) {
    return res.json({
      message: "Categories must be an array with at least 1 value",
    });
  }
  next();
};
