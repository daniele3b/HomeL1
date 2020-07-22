const amqp = require('amqplib/callback_api')
const config = require('config')



amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    const queue = config.get('amqp_queue');

    channel.assertQueue(queue, {
      durable: false
    });

    console.log(" [*] Waiting for info in %s...", queue);
    
    channel.consume(queue, function(data) {
        const info = JSON.parse(data.content)
        console.log(info)

        // Here we add some logic to put info into a file
    
    }, {
        noAck: true
    });

  });
});

