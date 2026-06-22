/**
 * Run once after database setup to create the first admin account:
 *   node scripts/seed-admin.js
 *
 * Change the email and password below BEFORE running.
 * After running, delete or change the password from the admin dashboard.
 */

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  // ── CHANGE THESE BEFORE RUNNING ──
  const email    = 'admin@sjhmysuru.com';
  const password = 'SJH@Admin2026!';      // must be 8+ chars
  const fullName = 'SJH Administrator';
  // ─────────────────────────────────

  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    console.log(`⚠️  User already exists: ${email}`);
    return;
  }

  const passwordHash = await bcrypt.hash(password, 12);

  const user = await prisma.user.create({
    data: { email, passwordHash, fullName, role: 'SUPER_ADMIN' },
  });

  console.log('✅ Admin user created successfully!');
  console.log(`   Email   : ${user.email}`);
  console.log(`   Role    : ${user.role}`);
  console.log(`   Password: ${password}`);
  console.log('\n⚠️  IMPORTANT: Change this password immediately after first login!');
}

main()
  .catch((e) => { console.error('❌ Error:', e); process.exit(1); })
  .finally(() => prisma.$disconnect());
