// checkes the buttons on the Homepage

const fs = require('fs');
const path = require('path');
const request = require('supertest');
const app = require('../app');

describe('Index page', () => {
  let indexHtml;

  beforeAll(() => {
    indexHtml = fs.readFileSync(path.join(__dirname, '../public/index.html'), 'utf8');
  });

  it('contains Make a Booking button that links to /booking.html', () => {
    const makeBookingBtn = '<button class="cta booking" type="submit" alt="Background image of two fingers holding a needle">Make a Booking</button>';
    expect(indexHtml).toContain(makeBookingBtn);

    const makeBookingForm = '<form action="booking.html" style="width:100%;">';
    expect(indexHtml).toContain(makeBookingForm);
  });

  it('contains About our Clinic button that links to /aboutus.html', () => {
    const aboutClinicBtn = '<button class="cta aboutclinic" type="submit" alt="Background image of a person receiving a massage">About our Clinic</button>';
    expect(indexHtml).toContain(aboutClinicBtn);

    const aboutClinicForm = '<form action="aboutus.html" style="width:100%;">';
    expect(indexHtml).toContain(aboutClinicForm);
  });
});
