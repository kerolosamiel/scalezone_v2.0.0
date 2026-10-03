import { CircleCheckBig } from 'lucide-react';
import { DialogContent, DialogDescription, DialogHeader, DialogTitle } from '../ui/dialog';

export default function ArabicSuccessModal() {
  return (
    <DialogContent
      className="text-center p-48 w-fit sm:max-w-[unset]! [&_button]:size-fit [&_button]:hover:bg-transparent! [&_button>svg]:size-25! max-md:w-[80%] max-[350px]:w-[90%]! max-[450px]:px-16"
      dir="rtl"
    >
      <DialogHeader className=" flex flex-col items-center justify-center gap-32">
        <DialogTitle>
          <CircleCheckBig className="size-113 text-accent" />
        </DialogTitle>
        <DialogTitle className="text-[3rem] text-primary max-[450px]:text-[2.4rem]">
          خطوتك الاول للنجاح!
        </DialogTitle>
        <div>
          <DialogDescription className="text-[1.6rem] mb-12 max-[450px]:text-[1.4rem]">
            شكرا لزيارتك جناحنا وتسجيل بياناتك. سيتواصل معك احد مستشارينا في أقرب وقت.
          </DialogDescription>
          <DialogDescription className="text-[1.6rem] mb-12 max-[450px]:text-[1.4rem]">
            يرجى تفقد بريدك الالكترونى ورسائل الواتساب الان; لقد ارسلنا لك تفاصيل شاملة توضح كافة
            خدماتنا لتطلع عليها.
          </DialogDescription>
        </div>
      </DialogHeader>
    </DialogContent>
  );
}
