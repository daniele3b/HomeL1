const amqp = require('amqplib/callback_api')
const config = require('config')

function receiveInfo(){
    amqp.connect('amqp://localhost', function(error0, connection) {
  if (error0) {
    throw error0;
  }
  connection.createChannel(function(error1, channel) {
    if (error1) {
      throw error1;
    }
    var exchange = config.get('amqp_exchange')

    channel.assertExchange(exchange, 'direct', {
      durable: false
    });

    channel.assertQueue('', {
      exclusive: true
      }, function(error2, q) {
        if (error2) {
          throw error2;
        }
      console.log('[Service 1] Waiting for info...');

      channel.bindQueue(q.queue, exchange, '1');

      channel.consume(q.queue, function(msg) {
        console.log('[Service 1] Received info!');
        console.log(JSON.parse(msg.content));
      }, {
        noAck: true
      });
    });
  });
});
}

exports.receiveInfo = receiveInfo