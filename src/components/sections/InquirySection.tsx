import { ChevronDownIcon } from '../icons';
import { Container } from '../Container';

export function InquirySection() {
  return (
    <section className="pt-5">
      <Container>
        <div className="relative overflow-hidden rounded-md border border-gray-200">
          <div className="relative h-[420px] w-full">
            <img
              src="/images/inquiry-bg.png"
              alt=""
              className="absolute inset-0 h-full w-full object-cover opacity-70"
            />
            <div className="absolute inset-0 bg-[#0D6EFD]/60" />

            <div className="relative flex h-full">
              <div className="flex w-[480px] flex-col justify-center px-10 text-white">
                <h2 className="text-[32px] font-semibold leading-tight tracking-tight">
                  An easy way to send requests to all suppliers
                </h2>
                <p className="mt-4 text-base leading-6 tracking-tight text-white/90">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
                  incididunt.
                </p>
              </div>

              <div className="flex flex-1 items-center justify-center p-8">
                <div className="w-full max-w-[500px] rounded-md bg-white p-6 shadow-md">
                  <h3 className="text-xl font-semibold tracking-tight text-dark">
                    Send quote to suppliers
                  </h3>
                  <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <input
                      type="text"
                      placeholder="What item you need?"
                      className="h-11 w-full rounded-md border border-gray-300 px-3 text-base text-dark outline-none placeholder:text-gray-500"
                    />
                    <div className="flex gap-3">
                      <input
                        type="text"
                        placeholder="Quantity"
                        className="h-11 flex-1 rounded-md border border-gray-300 px-3 text-base text-dark outline-none"
                      />
                      <div className="relative w-[100px]">
                        <select className="h-11 w-full appearance-none rounded-md border border-gray-300 bg-white px-3 pr-8 text-base text-dark outline-none">
                          <option>Pcs</option>
                        </select>
                        <ChevronDownIcon className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-gray-500" />
                      </div>
                    </div>
                    <textarea
                      placeholder="Type more details"
                      rows={4}
                      className="w-full resize-none rounded-md border border-gray-300 px-3 py-2 text-base text-gray-500 outline-none"
                    />
                    <button
                      type="submit"
                      className="h-10 w-full rounded-md bg-primary-gradient text-base font-medium text-white"
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
