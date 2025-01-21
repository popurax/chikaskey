export class Prefecture1734963526388 {
	name = 'Prefecture1734963526388';

	async up(queryRunner) {
		await queryRunner.query('CREATE TYPE "public"."user_profile_prefecture_enum" AS ENUM(\'_empty\', \'hokkaido\', \'aomori\', \'iwate\', \'miyagi\', \'akita\', \'yamagata\', \'fukushima\', \'ibaraki\', \'tochigi\', \'gunma\', \'saitama\', \'chiba\', \'tokyo\', \'kanagawa\', \'niigata\', \'toyama\', \'ishikawa\', \'fukui\', \'yamanashi\', \'nagano\', \'gifu\', \'shizuoka\', \'aichi\', \'mie\', \'shiga\', \'kyoto\', \'osaka\', \'hyogo\', \'nara\', \'wakayama\', \'tottori\', \'shimane\', \'okayama\', \'hiroshima\', \'yamaguchi\', \'tokushima\', \'kagawa\', \'ehime\', \'kochi\', \'fukuoka\', \'saga\', \'nagasaki\', \'kumamoto\', \'oita\', \'miyazaki\', \'kagoshima\', \'okinawa\')');
		await queryRunner.query('ALTER TABLE "user_profile" ADD "prefecture" "public"."user_profile_prefecture_enum"');
		await queryRunner.query('CREATE TYPE "public"."user_pending_prefecture_enum" AS ENUM(\'_empty\', \'hokkaido\', \'aomori\', \'iwate\', \'miyagi\', \'akita\', \'yamagata\', \'fukushima\', \'ibaraki\', \'tochigi\', \'gunma\', \'saitama\', \'chiba\', \'tokyo\', \'kanagawa\', \'niigata\', \'toyama\', \'ishikawa\', \'fukui\', \'yamanashi\', \'nagano\', \'gifu\', \'shizuoka\', \'aichi\', \'mie\', \'shiga\', \'kyoto\', \'osaka\', \'hyogo\', \'nara\', \'wakayama\', \'tottori\', \'shimane\', \'okayama\', \'hiroshima\', \'yamaguchi\', \'tokushima\', \'kagawa\', \'ehime\', \'kochi\', \'fukuoka\', \'saga\', \'nagasaki\', \'kumamoto\', \'oita\', \'miyazaki\', \'kagoshima\', \'okinawa\')');
		await queryRunner.query('ALTER TABLE "user_pending" ADD "prefecture" "public"."user_pending_prefecture_enum"');
	}

	async down(queryRunner) {
		await queryRunner.query('ALTER TABLE "user_pending" DROP COLUMN "prefecture"');
		await queryRunner.query('DROP TYPE "public"."user_pending_prefecture_enum"');
		await queryRunner.query('ALTER TABLE "user_profile" DROP COLUMN "prefecture"');
		await queryRunner.query('DROP TYPE "public"."user_profile_prefecture_enum"');
	}
}
