import { ChevronDownIcon } from '../icons';
import { Container } from '../Container';
import InquiryBg from '../../assets/images/backgrounds/Inquiry.png';

export function InquirySection() {
  return (
    <section className="pt-5">
      <Container>
        <div className="relative overflow-hidden rounded-md border border-gray-200">
          <div className="relative h-[500px] w-full">
            <img
              src={InquiryBg}
              alt="Inquiry background"
              className="absolute inset-0 h-full w-full object-cover opacity-100"
            />
            <div className="absolute inset-0 bg-[#0D6EFD]/20" />

            <div className="relative flex h-full">
              <div className="flex w-[420px] flex-col justify-start text-white">
                <h2 className="text-[32px] font-semibold pt-10 pl-10">
                  An easy way to send requests to all suppliers
                </h2>
                <p className="mt-4 text-base lpt-10 pl-10 text-white/90">
                   Select your items, specify quantities, and get competitive quotes directly from verified suppliers.
                </p>
              </div>

              <div className="flex flex-1 items-center justify-end pr-10">
                <div className="w-full max-w-[600px] rounded-3xl bg-white p-6 shadow-[0_25px_50px_-20px_rgba(15,23,42,0.2)]">
                  <h3 className="text-xl font-semibold tracking-tight text-gray-900">
                    Send quote to suppliers
                  </h3>
                  <form className="mt-5 space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder="What item you need?"
                      className="h-14 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
                    />
                    <textarea
                      placeholder="Type more details"
                      rows={5}
                      className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-4 text-base text-gray-900 outline-none placeholder:text-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
                    />
                    <div className="flex items-center gap-3">
                      <input
                        type="text"
                        placeholder="Quantity"
                        className="h-14 flex-1 rounded-2xl border border-gray-200 bg-white px-4 text-base text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20"
                      />
                      <div className="relative w-[120px]">
                        <select className="h-14 w-full appearance-none rounded-2xl border border-gray-200 bg-white px-4 pr-10 text-base text-gray-900 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/20 cursor-pointer">
                          <option>Pcs</option>
                          <option value="set">Set</option>
                          <option value="unit">Unit</option>
                          <option value="pack">Pack</option>
                          <option value="box">Box</option>
                        </select>
                        <ChevronDownIcon className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="h-14 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 text-base font-semibold text-white shadow-md transition hover:from-blue-700 hover:to-blue-600"
                    >
                      Send inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
