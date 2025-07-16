export default function Section4() {
  return (
    <footer className="bg-gray-900 text-white py-6 px-10 text-sm text-center">
      <h3 className="text-base font-semibold mb-2">عن الموقع</h3>
      <ul className="space-y-1 max-w-md mx-auto">
        <li>إرشادات الاستخدام</li>
        <li>تواصل معنا</li>
        <li>جميع الحقوق محفوظة © {new Date().getFullYear()}</li>
      </ul>
    </footer>
  );
}
