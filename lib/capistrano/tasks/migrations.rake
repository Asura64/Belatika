namespace :migrations do
  task :migrate do
    symfony_console('doctrine:migrations:migrate', '--no-interaction')
  end
  task :first do
    symfony_console('doctrine:migrations:migrate first', '--no-interaction')
  end
  task :prev do
    symfony_console('doctrine:migrations:migrate prev', '--no-interaction')
  end
  task :next do
    symfony_console('doctrine:migrations:migrate next', '--no-interaction')
  end
  task :latest do
    symfony_console('doctrine:migrations:migrate latest', '--no-interaction')
  end
end