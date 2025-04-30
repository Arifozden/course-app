export default function ContactPage() {
    return (
      <>
      
      <div id="contact">
        <h2>Contact</h2>
        <form>
          <div>
            <label htmlFor="email">
              Email:</label>
            <input type="email" id="email" name="email" required />
              </div>
              <div>
            <label htmlFor="message">
              Message:</label>
            <textarea id="message" name="message" required></textarea>
              </div>
              <button type="submit">Submit</button>
              </form>
        </div></>
    );
  }