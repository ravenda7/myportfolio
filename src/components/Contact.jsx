function Contact() {
  return (
    <section className="mt-20 flex flex-col text-center">
      <h1 className="rubik text-[32px] uppercase text-[var(--text-color)] m-0 p-0 mb-[30px]">Contact</h1>
      <form action="" className="flex flex-col md:gap-[40px] gap-[30px]">
        <div>
          <label htmlFor="name" hidden>
            Name
          </label>
          <input
          className="h-[50px] w-[250px] pl-[16px] rounded-[20px] border-[#888] border-[1px] box-border bg-[var(--background-color)] text-[var(--form-text-color)] placeholder:text-[var(--form-text-color)] md:w-[600px] md:text-[20px] lg:w-[800px]"
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
          />
        </div>
        <div>
          <label htmlFor="email" hidden>
            Email
          </label>
          <input
           className="h-[50px] w-[250px] pl-[16px] rounded-[20px] border-[#888] border-[1px] box-border bg-[var(--background-color)] text-[var(--form-text-color)] placeholder:text-[var(--form-text-color)] md:w-[600px] md:text-[20px] lg:w-[800px]"
            type="text"
            name="email"
            id="email"
            placeholder="Email"
            required
          />
        </div>
        <div>
          <label htmlFor="message" hidden>
            Message
          </label>
          <textarea
          className="h-[250px] w-[250px] p-[16px] rounded-[20px] border-[#888] border-[1px] box-border bg-[var(--background-color)] text-[var(--form-text-color)] resize-none placeholder:text-[var(--form-text-color)] md:w-[600px] md:text-[20px] lg:w-[800px]"
            name="message"
            id="message"
            placeholder="Message"
            required></textarea>
        </div>
        <input className="bg-[var(--btn-color)] text-[var(--btn-text-color)] border-none rounded-[20px] w-[126px] h-[50px] text-[20px] cursor-pointer font-bold shadow-[0_4px_4px_rgba(0,0,0,0.25)] transition-shadow duration-200 ease-in-out mx-auto hover:scale-[1.05] active:translate-y-[2px] active:shadow-[0_2px_2px_rgba(0,0,0,0.25)]" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default Contact;
