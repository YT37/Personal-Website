import 'package:flutter/material.dart';

import '../config/constants.dart';
import '../config/data.dart';
import '../widgets/info_card.dart';

class WorkPage extends StatelessWidget {
  const WorkPage({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 500,
      decoration: BoxDecoration(
        gradient: LinearGradient(
          begin: Alignment.topLeft,
          end: Alignment.bottomRight,
          colors: [
            theme.colorScheme.secondary,
            theme.colorScheme.tertiary,
          ],
        ),
      ),
      child: SizedBox(
        height: 500,
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 20),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            mainAxisAlignment: MainAxisAlignment.spaceEvenly,
            children: [
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 25),
                child: Text(
                  "Work",
                  style: theme.textTheme.displayMedium!
                      .copyWith(fontWeight: FontWeight.bold),
                ),
              ),
              Flexible(
                child: Scrollbar(
                  child: ListView(
                    scrollDirection: Axis.horizontal,
                    children: List.generate(
                      WORK.length,
                      (index) => InfoCard(
                        cardColor: theme.colorScheme.tertiary,
                        textColor: theme.colorScheme.onTertiary,
                        data: WORK[index],
                      ),
                    ),
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
