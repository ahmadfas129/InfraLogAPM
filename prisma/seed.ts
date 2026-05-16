const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash('@Abc123456', 10);

  await prisma.user.upsert({
    where: { email: 'admin@InfraLogAPM.com' },
    update: {},
    create: {
      name: 'InfraLog Admin',
      email: 'admin@InfraLogAPM.com',
      password,
      role: 'ADMIN'
    }
  });

  const plans = [
    {
      name: 'Starter',
      priceMonthly: 19,
      description: 'Basic infrastructure monitoring for small teams.',
      features: JSON.stringify(['5 servers', 'Email alerts', 'Basic dashboards', 'Community support'])
    },
    {
      name: 'Professional',
      priceMonthly: 79,
      description: 'Advanced monitoring with API and collaboration.',
      features: JSON.stringify(['25 servers', 'API monitoring', 'Team collaboration', 'Advanced dashboards'])
    },
    {
      name: 'Enterprise',
      priceMonthly: 199,
      description: 'Unlimited observability with dedicated support.',
      features: JSON.stringify(['Unlimited monitoring', 'Dedicated support', 'Custom integrations', 'SLA and onboarding'])
    }
  ];

  for (const plan of plans) {
    await prisma.pricingPlan.upsert({
      where: { name: plan.name },
      update: {},
      create: plan
    });
  }

  const admin = await prisma.user.findUnique({ where: { email: 'admin@InfraLogAPM.com' } });

  if (admin) {
    await prisma.notification.createMany({
      data: [
        { userId: admin.id, title: 'Welcome to InfraLogAPM', body: 'Your admin dashboard is ready.', category: 'onboarding' },
        { userId: admin.id, title: 'New payment received', body: 'Professional plan subscription completed.', category: 'billing' }
      ]
    });

    await prisma.metric.createMany({
      data: [
        { userId: admin.id, name: 'CPU Usage', value: 42.6, unit: '%', timestamp: new Date() },
        { userId: admin.id, name: 'API Latency', value: 160.4, unit: 'ms', timestamp: new Date() }
      ]
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
