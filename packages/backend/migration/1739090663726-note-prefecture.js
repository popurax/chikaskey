export class NotePrefecture1739090663726 {
	name = 'NotePrefecture1739090663726';

	async up(queryRunner) {
		await queryRunner.query('CREATE TYPE "public"."note_prefecture_enum" AS ENUM(\'_empty\', \'hokkaido\', \'aomori\', \'iwate\', \'miyagi\', \'akita\', \'yamagata\', \'fukushima\', \'ibaraki\', \'tochigi\', \'gunma\', \'saitama\', \'chiba\', \'tokyo\', \'kanagawa\', \'niigata\', \'toyama\', \'ishikawa\', \'fukui\', \'yamanashi\', \'nagano\', \'gifu\', \'shizuoka\', \'aichi\', \'mie\', \'shiga\', \'kyoto\', \'osaka\', \'hyogo\', \'nara\', \'wakayama\', \'tottori\', \'shimane\', \'okayama\', \'hiroshima\', \'yamaguchi\', \'tokushima\', \'kagawa\', \'ehime\', \'kochi\', \'fukuoka\', \'saga\', \'nagasaki\', \'kumamoto\', \'oita\', \'miyazaki\', \'kagoshima\', \'okinawa\')');
		await queryRunner.query('ALTER TABLE "note" ADD "prefecture" "public"."note_prefecture_enum"');
	}

	async down(queryRunner) {
		await queryRunner.query('ALTER TABLE "note" DROP COLUMN "prefecture"');
		await queryRunner.query('DROP TYPE "public"."note_prefecture_enum"');
	}
};
