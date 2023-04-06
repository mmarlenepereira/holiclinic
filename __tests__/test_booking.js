//checks for a Calendly script/widget on the Booking page

const request = require('supertest');
const cheerio = require('cheerio');
const app = require('../app');

describe('Booking page', () => {
  const agent = request.agent(app);

  test('Calendly widget should exist and be working', async () => {
    const response = await agent.get('/booking.html');
    expect(response.status).toBe(200);

    const $ = cheerio.load(response.text);
    const calendlyWidget = $('.calendly-inline-widget');
    expect(calendlyWidget.length).toBe(1);

    const widgetScript = $('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    expect(widgetScript.length).toBe(1);
  });
});

