import { CircleCheckBig } from 'lucide-react';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';
import BaseSuccessModal from './BaseSuccessModal';

export default function ArabicSuccessModal({ setOpen }) {
  return (
    <>
      <BaseSuccessModal
        title="خطوتك الاول للنجاح!"
        description="شكرا لزيارتك جناحنا وتسجيل بياناتك. سيتواصل معك احد مستشارينا في أقرب وقت."
        button={{ href: '/appointment', label: 'احجز موعدك' }}
        secondButton={{ label: 'اغلق' }}
        setOpen={setOpen}
      >
        <DialogDescription className="text-[1.6rem] mb-12 max-[450px]:text-[1.4rem]">
          يرجى تفقد بريدك الالكترونى ورسائل الواتساب الان; لقد ارسلنا لك تفاصيل شاملة توضح كافة
          خدماتنا لتطلع عليها.
        </DialogDescription>
      </BaseSuccessModal>
    </>
  );
}
